function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const directCountElement = document.querySelector('.notification_count');
    let directCount = 0;
    if (directCountElement) {
      directCount = Transdesk.safeParseInt(directCountElement.textContent);
    }

    Transdesk.setBadge(directCount, 0);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
