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
    app.innerHTML = "";
    app.appendChild(template.content.cloneNode(true));
  }
}
