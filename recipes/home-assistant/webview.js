function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const badges = document
      .querySelector('home-assistant')
      .shadowRoot.querySelector('home-assistant-main')
      .shadowRoot.querySelector('ha-sidebar')
      .shadowRoot.querySelectorAll('.notification-badge');
    if (badges.length > 0) {
      const count = Transdesk.safeParseInt(
        badges[0].textContent.replaceAll(/[^\p{N}]/gu, ''),
      );
      Transdesk.setBadge(count);
    } else {
      Transdesk.setBadge(0);
    }
  };
  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
