module.exports = Transdesk =>
  class Nextcloud extends Transdesk {
    buildUrl(url) {
      return `${url}/`;
    }
  };
