module.exports = Transdesk => {
  document.addEventListener(
    'click',
    event => {
      const target = event.target.closest('a');

      if (target && target.href) {
        const url = target.href;

        const isInternal = url.includes('max.ru') || url.startsWith('/');

        if (!isInternal) {
          event.preventDefault();
          event.stopPropagation();

          try {
            window.open(url, '_blank', 'noreferrer');
          } catch {
            if (typeof Transdesk.openNewWindow === 'function') {
              Transdesk.openNewWindow(url);
            }
          }
        }
      }
    },
    true,
  );
};
