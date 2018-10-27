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
  constructor(statusCode = '500', message, ...rest) {
    // If `statusCode` not in `http.STATUS_CODES` then `message` was sent first so use `500`
    if (!Object.keys(http.STATUS_CODES).includes(statusCode.toString())) {
      message = statusCode.toString().trim() || http.STATUS_CODES['500'];
      statusCode = '500';
    }

    super(message || http.STATUS_CODES[statusCode.toString()], http.STATUS_CODES[statusCode.toString()].toUpperCase().replace(/ /g, '_'), { ...rest });
  }
}
