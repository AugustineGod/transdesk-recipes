function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = function getMessages() {
    const unreadBadges = document.querySelectorAll('span.unread');
    const unreadBadgesArray = [...unreadBadges];
    const unreadMessagesCount = unreadBadgesArray.reduce(
      (previousValue, currentBadge) =>
        previousValue + Transdesk.safeParseInt(currentBadge.textContent),
      0,
    );
    Transdesk.setBadge(unreadMessagesCount);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
