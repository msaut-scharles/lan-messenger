import { checkUsername } from "../utils/username.js";
import { getUsernameCookie, setUsernameCookie } from "../utils/cookies.js";

export function cleanup() {
  clearTimeout(homeDebounceTimer);
}

export function initHome() {
  const usernameHomeInput = document.getElementById("home-username-field");
  const startButton = document.querySelector(".home__button");

  usernameHomeInput.value = getUsernameCookie();

  startButton.addEventListener("click", () => {
    const username = usernameHomeInput.value;
    if (checkUsername(username)) {
      setUsernameCookie("username", username);
      window.location.hash = "#/chat";
    }
  });

  let homeDebounceTimer;
  usernameHomeInput.addEventListener("input", () => {
    clearTimeout(homeDebounceTimer);
    homeDebounceTimer = setTimeout(() => {
      const username = usernameHomeInput.value;
      const currentCookie = getUsernameCookie();
      if (username !== currentCookie && checkUsername(username)) {
        setUsernameCookie("username", username);
      }
    }, 8000);
  });
}
