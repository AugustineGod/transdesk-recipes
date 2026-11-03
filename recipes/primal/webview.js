function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  Transdesk.handleDarkMode(isEnabled => {
    localStorage.setItem('theme', isEnabled ? 'midnight' : 'ice');
  });

  const getMessages = () => {
    let direct = 0;

    // "Notifications" and "Messages". Sum the values for direct badge.
    const notificationsElement = document.querySelector(
      'a[href="/notifications"]',
    ).nextSibling;
    if (notificationsElement) {
      direct += Transdesk.safeParseInt(notificationsElement.textContent);
    }
    const DMElement = document.querySelector('a[href="/dms"]').nextSibling;
    if (DMElement) {
      direct += Transdesk.safeParseInt(DMElement.textContent);
    }

    Transdesk.setBadge(direct);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
