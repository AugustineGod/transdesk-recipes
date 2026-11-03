const path = require('path');

module.exports = Transdesk => {
  window.addEventListener('gotify-transdesk-badge', event => {
    Transdesk.setBadge(event.detail?.count || 0, 0);
  });

  Transdesk.injectJSUnsafe(path.join(__dirname, 'badge.js'));
  Transdesk.loop(() => {
    window.dispatchEvent(new CustomEvent('gotify-transdesk-poll'));
  });
};
