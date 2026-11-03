function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = (Transdesk, settings) => {
  const collectCounts = selector => {
    let unreadCount = 0;
    const foldersElement = document.querySelector(selector);
    if (foldersElement) {
      const allScreenReaders = foldersElement.querySelectorAll(
        'span.screenReaderOnly',
      );
      for (const child of allScreenReaders) {
        if (child.previousSibling) {
          unreadCount += Transdesk.safeParseInt(
            child.previousSibling.textContent,
          );
        }
      }
    }
    return unreadCount;
  };

  // adapted from the franz-custom-website recipe, for opening
  // links according to  the user's preference (Transdesk/ext.browser)
  document.addEventListener(
    'click',
    event => {
      const targetElement = event.target;
      if (!(targetElement instanceof Element)) {
        return;
      }
      const link = targetElement.closest('a[href]');

      if (!link || Transdesk.isImage(link)) {
        return;
      }

      const url = link.getAttribute('href');
      if (!url || url === '#') {
        return;
      }

      // Keep in-app navigation untouched.
      if (url.startsWith('/')) {
        return;
      }

      let parsedUrl;
      try {
        parsedUrl = new URL(url, window.location.href);
      } catch {
        return;
      }

      if (
        !['http:', 'https:', 'ftp:', 'mailto:'].includes(parsedUrl.protocol)
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (settings.trapLinkClicks === true) {
        window.location.href = parsedUrl.toString();
      } else {
        Transdesk.openNewWindow(parsedUrl.toString());
      }
    },
    true,
  );

  const getMessages = () => {
    let directUnreadCount = 0;
    let indirectUnreadCount = 0;
    if (/\/owa/.test(location.pathname)) {
      // classic app
      directUnreadCount = Transdesk.safeParseInt(
        document.querySelectorAll("span[title*='Inbox'] + div > span")[0]
          ?.textContent,
      );
    } else {
      // new app
      indirectUnreadCount = collectCounts(
        'div[role=tree] > div:nth-of-type(2) > div[role=group] > span',
      ); // groups
      directUnreadCount =
        settings.onlyShowFavoritesInUnreadCount === true
          ? collectCounts('div[role=tree] > div:nth-of-type(1)')
          : collectCounts('div[role=tree] > div:nth-of-type(2)') -
            indirectUnreadCount;
    }

    Transdesk.setBadge(directUnreadCount, indirectUnreadCount);
  };
  Transdesk.loop(getMessages);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
