function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const inbox = document.querySelector(
      '.topbar-notificationsButton.has-newNotifications',
    );
    const passiveCount = inbox === null ? 0 : 1;
    Transdesk.setBadge(0, passiveCount);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'franz.css'));
};
