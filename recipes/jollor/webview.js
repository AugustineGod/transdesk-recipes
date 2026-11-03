function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const count = document.querySelector(
      '.user-menu-message-item-count',
    ).textContent;
    Transdesk.setBadge(count);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'css', 'franz.css'));
};
