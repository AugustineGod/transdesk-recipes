// Wait for Transdesk to initialize
if (window.transdesk?.setBadge !== undefined) {
  window.transdesk.setBadge(
    window.transdesk.safeParseInt(window.zmfolAction?.getUnreadViewCount()) +
      window.transdesk.safeParseInt(
        document.querySelector('#wms_menu_unreadchats_cnt')?.textContent,
      ),
    window.transdesk.safeParseInt(
      window.zmTopBar?.topBandElements()?.notification?.children
        ?.notificationBadge?.textContent,
    ),
  );
}
