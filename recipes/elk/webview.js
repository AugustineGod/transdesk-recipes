function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  // Inject css
  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));

  // Get notifications
  Transdesk.loop(() => {
    const notifications = document
      .querySelectorAll('[href$=notifications]')
      .item(0);
    // Null if not present
    if (!notifications) {
      return;
    }
    // Assume first element contains the number of notifications
    const parsedValue = Transdesk.safeParseInt(notifications.outerText);
    // Set to parsed value
    Transdesk.setBadge(parsedValue);
  });
};
