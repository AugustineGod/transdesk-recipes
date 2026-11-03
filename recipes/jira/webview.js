function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    // get unread messages
    const element = document.querySelector(
      '#atlassian-navigation-notification-count span',
    );
    Transdesk.setBadge(element ? element.textContent : 0);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
