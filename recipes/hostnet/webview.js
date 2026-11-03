function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    Transdesk.setBadge(
      Transdesk.safeParseInt(
        document.querySelectorAll('.badge.topbar-launcherbadge')[0].firstChild
          .data,
      ),
    );
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
