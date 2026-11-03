function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    let direct = 0;

    const np = document.querySelector('#noti_np_count');
    const re = document.querySelector('#noti_re_count');

    if (np) {
      direct += Transdesk.safeParseInt(np.textContent);
    }
    if (re) {
      direct += Transdesk.safeParseInt(re.textContent);
    }

    Transdesk.setBadge(direct);
  };

  Transdesk.loop(getMessages, 10_000);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
