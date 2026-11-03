// Monkey patch ServiceWorker.postMessage so that it will actually post a notification in Transdesk:

function newPostMessage(options) {
  window.transdesk.displayNotification(options.title, options);
}

ServiceWorker.prototype.postMessage = newPostMessage;
