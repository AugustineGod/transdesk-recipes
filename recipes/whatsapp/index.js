module.exports = Transdesk =>
  class Messenger extends Transdesk {
    overrideUserAgent() {
      return window.navigator.userAgent
        .replaceAll(/(Transdesk|Electron)\/\S+ \([^)]+\)/g, '')
        .trim();
    }

    modifyRequestHeaders() {
      return [
        {
          headers: {
            'user-agent': window.navigator.userAgent
              .replaceAll(/(Transdesk|Electron)\/\S+ \([^)]+\)/g, '')
              .trim(),
          },
          requestFilters: {
            urls: ['*://*/*'],
          },
        },
      ];
    }
  };
