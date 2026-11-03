function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    let count = 0;
    const elem = document.querySelector('a[href="/messages"] div div');
    if (elem) {
      count = Transdesk.safeParseInt(elem.textContent);
    }

    Transdesk.setBadge(count);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
