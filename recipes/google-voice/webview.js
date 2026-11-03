function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Transdesk => {
  function parseQuery(query) {
    const el = document.querySelector(query);
    return el && Transdesk.safeParseInt(el.textContent);
  }

  const getMessages = () => {
    const el = document.querySelector('.msgCount');
    let count;

    if (el && el.textContent) {
      count = Transdesk.safeParseInt(el.textContent.replaceAll(/[ ()]/gi, ''));
    } else {
      const countMessages = parseQuery(
        'mat-nav-list a[gv-test-id="sidenav-messages"] span.navItemBadge',
      );
      const countCalls = parseQuery(
        'mat-nav-list a[gv-test-id="sidenav-calls"] span.navItemBadge',
      );
      const countVoicemails = parseQuery(
        'mat-nav-list a[gv-test-id="sidenav-voicemail"] span.navItemBadge',
      );
      count = countMessages + countCalls + countVoicemails;
    }

    Transdesk.setBadge(count);
  };

  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
