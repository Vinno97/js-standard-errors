import ExtendableError from './extendable-error';

export default class NotImplementedError extends ExtendableError {
  constructor(message, options) {
    super(message || 'Method is not implemented', 'ERR_NOT_IMPLEMENTED', options);
  }
}
