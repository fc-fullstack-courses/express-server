class ApplicationError extends Error {
  constructor(status, message) {
    super();
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
  }
}

module.exports = ApplicationError;
