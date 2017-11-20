const http = require('http');
const ExtendableError = require('./extendable-error');

class HttpError extends ExtendableError {
  /**
   * Creates a new HttpError Object
   *
   * @param {Number} statusCode The HTTP Status Code.
   * @param {String|Object} [message] An optional message to show the user when the error occurs.
   */
  constructor(message, statusCode) {
    super(
      message || http.STATUS_CODES[statusCode],
      http.STATUS_CODES[statusCode].toUpperCase().replace(/ /g, '_'),
      { statusCode },
    );
  }
}

module.exports = HttpError;
