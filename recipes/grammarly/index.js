module.exports = Transdesk =>
  class Grammarly extends Transdesk {
    async validateUrl() {
      return true;
    }
  };
