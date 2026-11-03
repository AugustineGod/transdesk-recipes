function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = (Transdesk, settings) => {
  Transdesk.injectCSS(_path.default.join(__dirname, 'style.css'));

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

        if (!Transdesk.isImage(link)) {
          event.preventDefault();
          event.stopPropagation();

          if (settings.trapLinkClicks === true) {
            window.location.href = url;
          } else {
            Transdesk.openNewWindow(url);
          }
        }
      }
    },
    true,
  );
};
