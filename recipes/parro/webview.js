function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    const TransdeskData = document.querySelector('#TransdeskMessages').dataset;
    if (TransdeskData) {
      direct = TransdeskData.direct;
      indirect = TransdeskData.indirect;
    }

    Transdesk.setBadge(direct, indirect);
  }

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
  Transdesk.loop(getMessages);
};
