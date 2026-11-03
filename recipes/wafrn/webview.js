module.exports = Transdesk => {
  const getMessages = () => {
    const messageBadge = document.querySelector('#mat-badge-content-0');
    const parsedCount = Transdesk.safeParseInt(messageBadge.textContent);
    if (parsedCount) {
      Transdesk.setBadge(parsedCount, 0);
    } else {
      Transdesk.setBadge(0, 0);
    }
  };
  Transdesk.loop(getMessages);
};
