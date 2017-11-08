// I once took this class from another project and I cannot remember the original author.
// If you believe this class is based on your code, feel free to notify me and I will give credit
// where credit is due.

/**
 * A wrapper that extends Error so that it allows for easy extending in other classes
 *
 * @abstract
 */
class ExtendableError extends Error {
  /**
   * Creates a new Error object
   *
   * @param message {string} The error message
   * @param code {string} The unique error code
   * @param [options] {Object} optional extra properties
   */
  constructor(message, code, options = {}) {
    super(message);

    // extending Error is weird and does not propagate `message`
    Object.defineProperty(this, 'message', {
      configurable: true,
      enumerable: false,
      value: message,
      writable: true,
    });

    Object.defineProperty(this, 'name', {
      configurable: true,
      enumerable: false,
      value: this.constructor.name,
      writable: true,
    });

    Object.defineProperty(this, 'code', {
      configurable: true,
      enumerable: false,
      value: code,
      writable: true,
    });

    Object.keys(options).forEach(property => {
      Object.defineProperty(this, property, {
        configurable: true,
        enumerable: false,
        value: options[property],
        writable: true,
      });
    });

    if (Object.hasOwnProperty.call(Error, 'captureStackTrace')) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      Object.defineProperty(this, 'stack', {
        configurable: true,
        enumerable: false,
        value: (new Error(message)).stack,
        writable: true,
      });
    }
  }
}

module.exports = ExtendableError;
