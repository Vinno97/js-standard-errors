const ExtendableError = require('./extendable-error');

class NotImplementedError extends ExtendableError {
  constructor(message, options) {
    super(message || 'Method is not implemented', 'ERR_NOT_IMPLEMENTED', options);
  }
}

module.exports = NotImplementedError;
