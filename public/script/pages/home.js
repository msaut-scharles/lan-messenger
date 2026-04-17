import { checkUsername } from "../utils/username.js";
import { setUsernameCookie } from "../utils/cookies.js";

export function initHome() {
  const usernameInput = document.getElementById("home-username-field");
  const startButton = document.querySelector(".home__button");

  startButton.addEventListener("click", () => {
    const username = usernameInput.value;
    if (checkUsername(username)) {
      setUsernameCookie("username", username);
      window.location.hash = "#/chat";
    }
  });
}
