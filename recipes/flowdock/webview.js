function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const directMessages = document.querySelectorAll(
      '.activity-indicator-mentions',
    ).length;
    const indirectMessages = document.querySelectorAll(
      '.activity-indicator-chat',
    ).length;

    // set Transdesk badge
    Transdesk.setBadge(directMessages, indirectMessages);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
