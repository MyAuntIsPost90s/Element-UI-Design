import Config from './config';

function setAuthority(authority) {
  if (!authority) {
    return;
  }
  localStorage.setItem(Config.APP_KEY, authority);
}

function getAuthority() {
  return localStorage.getItem(Config.APP_KEY);
}

export default {
  setAuthority: setAuthority,
  getAuthority: getAuthority
}
