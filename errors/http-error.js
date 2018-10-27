import ExtendableError from './extendable-error';
import http from 'http';

/**
 * Errors based on http status codes
 *
 * @class HttpError
 * @extends {ExtendableError}
 */
export default class HttpError extends ExtendableError {
  /**
   * Creates a new HttpError
   *
   * @param {Number} statusCode The HTTP Status Code.
   * @param {String|Object} message An optional message to show the user when the error occurs.
   * @param {...Object} rest optional extra properties
   */
  constructor(statusCode, message = http.STATUS_CODES[statusCode], ...rest) {
    super(message, http.STATUS_CODES[statusCode].toUpperCase().replace(/ /g, '_'), { statusCode, ...rest });
  }
}
