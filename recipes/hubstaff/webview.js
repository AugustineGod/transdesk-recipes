function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  // TODO: If your hubstaff service has unread messages, uncomment these lines to implement the logic for updating the badges
  const getMessages = () => {
    // TODO: Insert your notification-finding code here
    let directMessages = 0;
    let indirectMessages = 0;
    const notificationContainers = document.querySelectorAll(
      '.notifications-number',
    );
    if (notificationContainers) {
      directMessages = Transdesk.safeParseInt(
        notificationContainers[0].textContent,
      );
      indirectMessages = Transdesk.safeParseInt(
        notificationContainers[1].textContent,
      );
    }
    Transdesk.setBadge(directMessages, indirectMessages);
  };
  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
