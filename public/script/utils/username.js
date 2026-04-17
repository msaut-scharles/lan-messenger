const USERNAME_REGEX = /^[a-zA-Z0-9_-]{0,32}$/;
export function checkUsername(username) {
  return USERNAME_REGEX.test(username);
}
