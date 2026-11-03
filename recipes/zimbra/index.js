module.exports = Transdesk =>
  class Zimbra extends Transdesk {
    async validateUrl() {
      return true;
    }
  };
