module.exports = Transdesk =>
  class Threads extends Transdesk {
    overrideUserAgent() {
      return window.navigator.userAgent
        .replaceAll(/(Transdesk|Electron)\/\S+ \([^)]+\)/g, '')
        .trim();
    }
  };
