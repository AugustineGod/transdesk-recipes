function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const directSelector = document.querySelectorAll(
      '.app-navigation-entry-utils-counter.highlighted',
    );
    const direct = directSelector
      ? Transdesk.safeParseInt(directSelector.length)
      : 0;

    const indirectSelector = document.querySelectorAll(
      '.app-navigation-entry-utils-counter:not(.highlighted)',
    );
    const indirect = indirectSelector
      ? Transdesk.safeParseInt(indirectSelector.length)
      : 0;

    Transdesk.setBadge(direct, indirect);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
