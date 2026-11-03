module.exports = Transdesk =>
  class Outlook extends Transdesk {
    overrideUserAgent() {
      return window.navigator.userAgent
        .replaceAll(/(Transdesk|Electron)\/\S+ \([^)]+\)/g, '')
        .trim();
    }
  };
