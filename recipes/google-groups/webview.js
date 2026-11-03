function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    let countImportant = 0;
    const unReadConversationCount = document.querySelectorAll('.NHlkZc');
    if (unReadConversationCount.length > 0) {
      countImportant = Transdesk.safeParseInt(
        unReadConversationCount[0].textContent,
      );
    }
    Transdesk.setBadge(countImportant, 0);
  };
  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
