module.exports = Transdesk =>
  class Jira extends Transdesk {
    overrideUserAgent() {
      return window.navigator.userAgent
        .replaceAll(/(Transdesk|Electron)\/\S+ \([^)]+\)/g, '')
        .trim();
    }
  };
