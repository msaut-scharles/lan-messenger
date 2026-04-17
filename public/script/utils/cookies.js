const USERNAME_MAX_AGE = 60 * 60 * 24 * 365;

export function setUsernameCookie(name, value) {
  document.cookie = `${name}=${value};max-age=${USERNAME_MAX_AGE};path=/`;
}

export function getUsernameCookie() {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    if (cookie.startsWith("username=")) {
      return cookie.slice("username=".length);
    }
  }
  return "";
}
