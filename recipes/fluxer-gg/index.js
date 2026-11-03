module.exports = Transdesk =>
  class Fluxer extends Transdesk {
    overrideUserAgent() {
      return window.navigator.userAgent.replace(
        /(Transdesk|Electron)\/\S+ \([^)]+\)/g,
        '',
      );
    }
  };
