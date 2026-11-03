function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const counter = document.querySelector(
      '[data-test=simple-bar-item-counter-chat]',
    );
    const unread = counter ? Number.parseInt(counter.textContent, 10) || 0 : 0;
    Transdesk.setBadge(unread);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
