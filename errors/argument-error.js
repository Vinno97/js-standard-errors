import ExtendableError from './extendable-error';

export default class ArgumentError extends ExtendableError {
  constructor(message, options) {
    super(message || 'Invalid Argument', 'ERR_INVALID_ARGUMENT', options);
  }
}
