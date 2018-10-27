import test from 'ava';
import { ArgumentError } from '../../errors';

test('requires new', t => {
    t.throws(() => {
        ArgumentError();
    }, /cannot be invoked without 'new'/);
});

test('custom message', t => {
    const message = 'custom message';
    t.is(new ArgumentError(message).message, message);
});

test('default message and code', t => {
    const error = new ArgumentError();

    t.is(error.message, 'Invalid Argument');
    t.is(error.code, 'ERR_INVALID_ARGUMENT');
});

test('custom message', t => {
    const message = 'Custom argument is missing.';
    const error = new ArgumentError(message);

    t.is(error.message, message);
    t.is(error.code, 'ERR_INVALID_ARGUMENT');
});

test('does not accept custom code', t => {
    const message = 'Custom argument is missing.';
    const code = 'RANDOM_ERROR';
    const error = new ArgumentError(message, code);

    t.is(error.message, message);
    t.is(error.code, 'ERR_INVALID_ARGUMENT');
});