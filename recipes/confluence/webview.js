function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const unreadMessageCountElement = document.querySelector(
      '#notifications-anchor .badge',
    );
    const unreadMessagesCount = Transdesk.safeParseInt(
      unreadMessageCountElement.textContent,
    );
    Transdesk.setBadge(unreadMessagesCount, 0);
  };
  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
