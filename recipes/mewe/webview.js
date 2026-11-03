function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const calculateTotalDirectMessages = () =>
    [...document.querySelectorAll('.chats-list-element')]
      .map(el =>
        Transdesk.safeParseInt(
          el.querySelector('.m-indicator .number').textContent,
        ),
      )
      .reduce((curr, prev) => curr + prev, 0);

  Transdesk.loop(() => Transdesk.setBadge(calculateTotalDirectMessages()));

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
