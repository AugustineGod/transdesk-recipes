function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const element = document.querySelector('.notification-count');
    Transdesk.setBadge(
      element ? Transdesk.safeParseInt(element.textContent.match(/\d+/)[0]) : 0,
    );
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
