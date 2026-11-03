function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const directElements = document.querySelectorAll('.unreadcount');
    let direct = 0;
    for (const directElement of directElements) {
      direct += Transdesk.safeParseInt(directElement.textContent);
    }
    Transdesk.setBadge(direct);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
