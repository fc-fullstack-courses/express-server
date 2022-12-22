const ApplicationError = require('./ApplicationError');

class NotFoundError extends ApplicationError {
  constructor(message) {
    super(404, message || 'Not found');
  }
}

module.exports = NotFoundError;
