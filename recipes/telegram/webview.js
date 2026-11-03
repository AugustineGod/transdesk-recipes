function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = (Transdesk, settings) => {
  const telegramVersion = document
    .querySelector('meta[property="og:url"]')
    ?.getAttribute('content');

  const isWebK = telegramVersion?.includes('/k/');

  // There are two different Telegram versions for internal competition
  // Read more: https://bugs.telegram.org/c/4002/public
  const webZCount = () => {
    let directCount = 0;
    let groupCount = 0;

    const directCountSelector = document.querySelectorAll(
      '.chat-list .ListItem.private .ChatBadge.unread:not(.muted)',
    );
    const groupCountSelector = document.querySelectorAll(
      '.chat-list .ListItem.group .ChatBadge.unread:not(.muted)',
    );

    for (const badge of directCountSelector) {
      directCount += Transdesk.safeParseInt(badge.textContent);
    }

    for (const badge of groupCountSelector) {
      groupCount += Transdesk.safeParseInt(badge.textContent);
    }

    Transdesk.setBadge(directCount, groupCount);
  };

  const webKCount = () => {
    let directCount = 0;
    let groupCount = 0;

    const elements = document.querySelectorAll('.rp:not(.is-muted)');

    for (const element of elements) {
      const subtitleBadge = element.querySelector('.dialog-subtitle-badge');

      if (subtitleBadge) {
        const parsedValue = Transdesk.safeParseInt(subtitleBadge.textContent);

        if (element.dataset.peerId > 0) {
          directCount += parsedValue;
        } else {
          groupCount += parsedValue;
        }
      }
    }

    Transdesk.setBadge(directCount, groupCount);
  };

  const getMessages = () => {
    if (isWebK) {
      webKCount();
    } else {
      webZCount();
    }
  };

  const getActiveDialogTitle = () => {
    let element;

    element = isWebK
      ? document.querySelector('.top .peer-title')
      : document.querySelector('.chat-list .ListItem .title > h3');

    Transdesk.setDialogTitle(element ? element.textContent : '');
  };

  const loopFunc = () => {
    getMessages();
    getActiveDialogTitle();
  };

  Transdesk.loop(loopFunc);

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));

  // This is a hack to get the telegram web app to open links in Transdesk (otherwise it asks to deeplink and open with any tg:// protocol handler)
  window.onload(() => {});

  // TODO: See how this can be moved into the main transdesk app and sent as an ipc message for opening with a new window or same Transdesk recipe's webview based on user's preferences
  document.addEventListener(
    'click',
    event => {
      const link = event.target.closest('a[href^="http"]');
      const button = event.target.closest('button[title^="http"]');

      if (link || button) {
        const url = link
          ? link.getAttribute('href')
          : button.getAttribute('title');

        if (!Transdesk.isImage(link)) {
          event.preventDefault();
          event.stopPropagation();

          if (
            settings.trapLinkClicks === true ||
            url.includes('t.me') ||
            url.includes('web.telegram.org')
          ) {
            window.location.href = url;
          } else {
            Transdesk.openNewWindow(url);
          }
        }
      }
    },
    true,
  );
};
