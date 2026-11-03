function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    // get unread messages
    const count = document.querySelectorAll('.guilds-wrapper .badge').length;

    // set Transdesk badge
    Transdesk.setBadge(count);
  };

  Transdesk.loop(getMessages);

  // Hide download message
  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
