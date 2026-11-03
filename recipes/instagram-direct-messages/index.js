module.exports = Transdesk =>
  class Messenger extends Transdesk {
    overrideUserAgent() {
      return window.navigator.userAgent.replaceAll(
        /(Transdesk|Electron)(\S+\s)/g,
        '',
      );
    }
  };
