function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  function getNotificationCount() {
    let notifications = document.querySelector(
      '#normal_notifications > a:nth-child(1) > span',
    ).innerHTML;
    return Transdesk.safeParseInt(notifications);
  }

  function getMessageCount() {
    let messages = document.querySelector('#pm_counter').innerHTML;
    return Transdesk.safeParseInt(messages);
  }

  const updateMessageCount = () => {
    let count = getNotificationCount() + getMessageCount();
    Transdesk.setBadge(count);
  };

  const loopRoutine = () => {
    updateMessageCount();
  };

  Transdesk.loop(loopRoutine);
  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
