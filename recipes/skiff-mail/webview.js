function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const element = document.querySelector('div[href="/mail/inbox"]');
    const matches = element.textContent.match(/\d+/);
    const unreadCount = Transdesk.safeParseInt(matches ? matches[0] : 0);
    Transdesk.setBadge(unreadCount);
  };
  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
