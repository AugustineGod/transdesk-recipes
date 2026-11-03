function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const inbox = document.querySelector(
      '.v-MailboxSource--inbox .v-MailboxSource-badge',
    );

    const messages = inbox ? Transdesk.safeParseInt(inbox.textContent) : 0;
    Transdesk.setBadge(messages);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectJSUnsafe(_path.default.join(__dirname, 'webview-unsafe.js'));
};
