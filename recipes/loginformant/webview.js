module.exports = Transdesk => {
  const safeBadgeValue = text =>
    Transdesk.safeParseInt((text || '').replace(/\D/g, '')) || 0;

  const getExplicitBadge = () => {
    const badgeNode = document.querySelector('[data-transdesk-badge]');
    if (!badgeNode) return 0;

    const value = badgeNode.dataset.transdeskBadge || badgeNode.textContent;
    return safeBadgeValue(value);
  };

  const getMessages = () => {
    Transdesk.setBadge(getExplicitBadge(), 0);
  };

  Transdesk.loop(getMessages);
};
