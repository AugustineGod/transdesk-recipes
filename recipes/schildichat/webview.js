function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  function getMessages() {
    const directMatches = document
      .querySelector('title')
      .textContent.match('(?<=\\[)\\d+(?=])');
    Transdesk.setBadge(
      Transdesk.safeParseInt(directMatches === null ? 0 : directMatches[0]),
      document
        .querySelector('.mx_SpaceTreeLevel')
        .querySelectorAll('.mx_NotificationBadge_dot').length,
    );
  }

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
