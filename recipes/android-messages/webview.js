function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

setTimeout(() => {
  const elem = document.querySelector('#af-error-container');

  // TODO: This will not work for non-english locales
  if (
    elem &&
    elem.textContent &&
    elem.textContent
      .toLowerCase()
      .includes('the requested url was not found on this server')
  ) {
    window.location.reload();
  }
}, 1000);

module.exports = (Transdesk, settings) => {
  const getMessages = () => {
    const messages = document.querySelectorAll('.text-content.unread').length;
    Transdesk.setBadge(messages);
  };

  window.addEventListener('beforeunload', async () => {
    Transdesk.clearStorageData(settings.id, {
      storages: [
        'appcache',
        'serviceworkers',
        'cachestorage',
        'websql',
        'indexdb',
      ],
    });
    Transdesk.releaseServiceWorkers();
  });

  Transdesk.loop(getMessages);

  if (settings.isDarkModeEnabled) {
    localStorage.setItem('dark_mode_enabled', 'true');
  } else {
    localStorage.setItem('dark_mode_enabled', 'false');
  }

  Transdesk.injectCSS(_path.default.join(__dirname, 'service.css'));
};
