function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const count = Transdesk.safeParseInt(
      document.querySelector(
        'a[data-test-folder-name="Inbox"] span[data-test-id="displayed-count"], [data-test-id="menu-list-item"]:has([aria-label="Inbox"], [aria-label="Selected, Inbox"]) [data-test-id="badge"] > span',
      )?.textContent,
    );
    Transdesk.setBadge(count);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
