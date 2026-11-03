function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = function getMessages() {
    const notificationsCounter = document.querySelector(
      '.js-notificationsCounter',
    );
    Transdesk.setBadge(Transdesk.safeParseInt(notificationsCounter.textContent));
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
