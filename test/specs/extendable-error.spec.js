import test from 'ava';
import { ExtendableError } from '../../errors';

test('requires new', t => {
    t.throws(() => {
        ExtendableError();
    }, /cannot be invoked without 'new'/);
});

test('can be extended', t => {
    const message = 'unicorns found';
    const code = 'ERR_UNICORNS_FOUND';

    class UnicornError extends ExtendableError {
        constructor(options) {
            super(message, code, options);
        }
    }

    t.is(new UnicornError().message, message);
    t.is(new UnicornError().code, code);
});

test('returns stack trace', t => {
    t.regex(new ExtendableError().stack, /at Test\.t \[as fn\]/);
    t.regex(new ExtendableError().stack, /test\/specs\/extendable\-error\.spec/);
});