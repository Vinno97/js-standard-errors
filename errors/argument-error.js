const ExtendableError = require('./extendable-error');

class ArgumentError extends ExtendableError {
  constructor(message, options) {
    super(message || 'Invalid Argument', 'ERR_INVALID_ARGUMENT', options);
  }
}

module.exports = ArgumentError;
