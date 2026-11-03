function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const hasUnreads = !!document.querySelector(
      '.unread-icon,.contact aside p',
    );
    const count = document
      .querySelectorAll('.contact aside p')
      .values()
      .map(el => Transdesk.safeParseInt(el.textContent) || 1)
      .reduce((a, b) => a + b, 0);

    Transdesk.setBadge(count || +hasUnreads);
  };

  const getDialogTitle = () => {
    const username = location.pathname.match(/^\/inbox\/([^/]+)/)?.[1];
    Transdesk.setDialogTitle(username ?? null);
  };

  Transdesk.loop(() => {
    getMessages();
    getDialogTitle();
  });

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
