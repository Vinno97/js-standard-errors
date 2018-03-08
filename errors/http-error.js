const http = require('http');
const ExtendableError = require('./extendable-error');

class HttpError extends ExtendableError {
  /**
   * Creates a new HttpError Object
   *
   * @param {String|Object} [message] An optional message to show the user when the error occurs.
   * @param {Number} statusCode The HTTP Status Code.
   * @param [options] {Object} optional extra properties
   */
  constructor(message, statusCode, options) {
    if (Number.isNaN(message)) {
      options = statusCode;
      statusCode = message;
      message = http.STATUS_CODES[statusCode];
    }
    const code = http.STATUS_CODES[statusCode].toUpperCase().replace(/ /g, '_');

    super(message, code, { statusCode, ...options });
  }
}

module.exports = HttpError;
