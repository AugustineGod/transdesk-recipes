module.exports = Transdesk =>
  class CustomWebsite extends Transdesk {
    async validateUrl() {
      return true;
    }
  };
