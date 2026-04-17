import { checkUsername } from "../utils/username.js";
import { getUsernameCookie, setUsernameCookie } from "../utils/cookies.js";

export function cleanup() {
  clearTimeout(homeDebounceTimer);
}

export function initTopbar() {
  const usernameTopbarInput = document.getElementById("topbar-username-field");

  usernameTopbarInput.value = getUsernameCookie();

  let topbarDebounceTimer;
  usernameTopbarInput.addEventListener("input", () => {
    clearTimeout(topbarDebounceTimer);
    topbarDebounceTimer = setTimeout(() => {
      const username = usernameTopbarInput.value;
      const currentCookie = getUsernameCookie();
      if (username !== currentCookie && checkUsername(username)) {
        setUsernameCookie("username", username);
      }
    }, 4000);
  });
}
