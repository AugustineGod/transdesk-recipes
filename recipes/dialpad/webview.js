function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  const getMessages = () => {
    let unreadCount = 0;
    $.each(
      $('[data-qa-has-unreads]'),
      (idx, item) =>
        (unreadCount += Transdesk.safeParseInt(
          item.attributes['data-qa-has-unreads'].value,
        )),
    );

    Transdesk.setBadge(unreadCount);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'whitemode.css'));
};
