const ACCESS_TOKEN = 'myc_dash_access_token';

export function setToken(value) {
  localStorage.setItem(ACCESS_TOKEN, value);
}

export function getToken() {
  return localStorage.getItem(ACCESS_TOKEN);
}

export function clearToken() {
  localStorage.removeItem(ACCESS_TOKEN);
}

export function clearStorage() {
  localStorage.removeItem(ACCESS_TOKEN);
}
