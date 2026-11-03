function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  function getNotifications() {
    let unreadNotifications = 0;
    for (const notificationCounterElement of document.querySelectorAll(
      '.notification__count',
    )) {
      unreadNotifications += Transdesk.safeParseInt(
        notificationCounterElement.textContent,
      );
    }

    Transdesk.setBadge(unreadNotifications);
  }
  Transdesk.loop(getNotifications);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
