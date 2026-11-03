function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const elements = document.querySelectorAll(
      '.badge.unread-count:not(.ng-hide)',
    );
    let count = 0;

    for (const element of elements) {
      try {
        count += Transdesk.safeParseInt(element.textContent);
      } catch (error) {
        console.error(error);
      }
    }

    // set Transdesk badge
    Transdesk.setBadge(count);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
