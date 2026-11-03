function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    let indirectCount = 0;
    const badge = document.querySelector('#numNotifs2');

    if (badge && badge.textContent) {
      indirectCount = Transdesk.safeParseInt(badge.textContent);
    }

    Transdesk.setBadge(0, indirectCount);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
