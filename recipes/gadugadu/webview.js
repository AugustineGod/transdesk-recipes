function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const updates = Transdesk.safeParseInt(
      document.querySelector('i#sr-last-counter').textContent,
    );
    let messages = 0;
    const elements = document.querySelectorAll('.chat-counter:not(.d-none)');
    for (const element of elements) {
      messages += Transdesk.safeParseInt(element.textContent);
    }

    Transdesk.setBadge(messages, updates);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
