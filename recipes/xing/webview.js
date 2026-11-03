function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  function getUnreadConversations() {
    Transdesk.setBadge(
      document.querySelector('#unread-conversations').textContent,
    );
  }

  Transdesk.loop(getUnreadConversations);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
