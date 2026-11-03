function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = (Transdesk, settings) => {
  const getMessages = () => {
    let count = 0;
    const container = document.querySelector('[role="tablist"] > button > div');

    if (container) {
      const { children } = container;

      if (children.length === 3) {
        // eslint-disable-next-line unicorn/prefer-at
        const elementContainer = children[children.length - 1];

        if (elementContainer) {
          const element = elementContainer.querySelector(
            '[data-text-as-pseudo-element]',
          );
          if (element && element.dataset) {
            count = Transdesk.safeParseInt(element.dataset.textAsPseudoElement);
          }
        }
      }
    }

    Transdesk.setBadge(count);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
  Transdesk.injectJSUnsafe(_path.default.join(__dirname, 'webview-unsafe.js'));

  // TODO: See how this can be moved into the main transdesk app and sent as an ipc message for opening with a new window or same Transdesk recipe's webview based on user's preferences
  document.addEventListener(
    'click',
    event => {
      const link = event.target.closest('a[href^="http"]');
      const button = event.target.closest('button[title^="http"]');

      if (link || button) {
        const url = link
          ? link.getAttribute('href')
          : button.getAttribute('title');

        event.preventDefault();
        event.stopPropagation();

        if (url.includes('api.asm.skype.com')) {
          // Always open file downloads in Transdesk, rather than the external browser
          window.location.href = url;
          return;
        }

        if (settings.trapLinkClicks === true) {
          window.location.href = url;
        } else {
          Transdesk.openNewWindow(url);
        }
      }
    },
    true,
  );
};
