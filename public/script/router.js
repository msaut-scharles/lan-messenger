import { initTopbar } from "./pages/topbar.js";

let currentPage = null;

const homePageRegistry = {
  home: () =>
    import("./pages/home.js").then((m) => {
      m.initHome();
      return m;
    }),
};

export function initMain() {
  initTopbar();
}

export function initRouter() {
  window.addEventListener("hashchange", handleRoute);
  handleRoute(); // handle initial page load
}

function handleRoute() {
  const route = window.location.hash.slice(1) || "/home";
  const templateId = route.replace("/", ""); // '/home' -> 'home'; '/chat' -> 'chat'
  const template = document.getElementById(templateId);
  const app = document.getElementById("app");

  if (template) {
    if (currentPage && typeof currentPage.cleanup === "function") {
      currentPage.cleanup();
    }

    app.innerHTML = "";
    app.appendChild(template.content.cloneNode(true));

    const init = homePageRegistry[templateId];
    if (init) {
      init().then((mod) => {
        currentPage = mod;
      });
    }
  }
}
