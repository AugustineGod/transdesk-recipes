module.exports = Transdesk =>
  class Gotomeeting extends Transdesk {
    overrideUserAgent() {
      return window.navigator.userAgent.replaceAll(
        /(Transdesk|Electron)\/\S+ \([^)]+\)/g,
        '',
      );
    }
  };
