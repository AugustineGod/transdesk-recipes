function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const allMessages = Transdesk.safeParseInt(
      document.querySelector('.team-counter').textContent,
    );
    Transdesk.setBadge(allMessages);
  };
  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
