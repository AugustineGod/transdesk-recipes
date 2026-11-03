function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const count = sel =>
      Transdesk.safeParseInt((document.querySelector(sel) || {}).textContent);

    const directCount = count('#mail-update');
    const indirectCount = count('#notify-update') + count('#intro-update');

    Transdesk.setBadge(directCount, indirectCount);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
