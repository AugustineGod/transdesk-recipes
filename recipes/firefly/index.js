module.exports = Transdesk =>
  class Firefly extends Transdesk {
    buildUrl(url) {
      return `${url}/`;
    }
  };
