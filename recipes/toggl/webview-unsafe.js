// only try to update badge once Transdesk API has finished loading
if (window.transdesk !== undefined && window.transdesk.setBadge !== undefined) {
  const timerRunning =
    window.toggl !== undefined &&
    !!window.toggl.store.getState().view.timer.timeEntry.start;

  // Treat running timer as a "non-direct" notification (default blue dot instead of urgent red "1")
  window.transdesk.setBadge(0, timerRunning ? 1 : 0);
}
