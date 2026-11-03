function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    let notifications = 0;
    let indirectNotifications = 0;

    const notificationElement = document.querySelector('#notifications_amount');
    const ticketElement = document.querySelector(
      "a[href='tickets.php'] > span",
    );
    const callElement = document.querySelector('#queue_amount');

    if (notificationElement) {
      notifications = Transdesk.safeParseInt(
        notificationElement.getAttribute('datacount'),
      );
    }

    if (ticketElement !== null) {
      indirectNotifications = Transdesk.safeParseInt(ticketElement.textContent);
    }

    if (callElement) {
      indirectNotifications += Transdesk.safeParseInt(
        callElement.getAttribute('datacount'),
      );
    }

    Transdesk.setBadge(notifications, indirectNotifications);
  };

  Transdesk.loop(getMessages);
  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
