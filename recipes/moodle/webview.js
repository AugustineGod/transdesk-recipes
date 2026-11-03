function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    const directCountSelector = [
      ...document.querySelectorAll('[data-region="count-container"]'),
    ];
    const totalMessageCount = directCountSelector.reduce(
      (count, item) => count + Transdesk.safeParseInt(item.textContent),
      0,
    );

    Transdesk.setBadge(totalMessageCount, 0);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
