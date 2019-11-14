import test from 'ava';
import { NotImplementedError } from '../../errors';

test('requires new', t => {
    t.throws(() => {
        NotImplementedError();
    }, /cannot be invoked without 'new'/);
});

test('default message and code', t => {
    const error = new NotImplementedError();

    t.is(error.message, 'Method is not implemented');
    t.is(error.code, 'ERR_NOT_IMPLEMENTED');
});

test('custom message', t => {
    const message = `Custom method isn't implemented.`;
    const error = new NotImplementedError(message);

    t.is(error.message, message);
    t.is(error.code, 'ERR_NOT_IMPLEMENTED');
});

test('does not accept custom code', t => {
    const message = `Custom method isn't implemented.`;
    const code = 'RANDOM_ERROR';
    const error = new NotImplementedError(message, code);

    t.is(error.message, message);
    t.is(error.code, 'ERR_NOT_IMPLEMENTED');
});