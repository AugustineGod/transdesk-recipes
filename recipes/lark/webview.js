function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const ele = document.querySelectorAll(
      '.larkc-badge-count.navbarMenu-badge',
    );
    if (ele.length === 0) {
      Transdesk.setBadge(0);
      return;
    }
    Transdesk.setBadge(ele[0].textContent);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
