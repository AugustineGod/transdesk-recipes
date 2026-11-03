module.exports = Transdesk =>
  class SteamChat extends Transdesk {
    overrideUserAgent() {
      return window.navigator.userAgent
        .replaceAll(/(Transdesk|Electron)\/\S+ \([^)]+\)/g, '')
        .trim();
    }
  };
