function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const unreadPrivateMessages = Transdesk.safeParseInt(
      $('.messages .unread-meeps').text(),
    );
    const unreadGroupMessages = Transdesk.safeParseInt(
      $('.today .unread-meeps').text(),
    );

    Transdesk.setBadge(unreadPrivateMessages + unreadGroupMessages);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
