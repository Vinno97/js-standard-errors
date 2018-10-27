import test from 'ava';
import http from 'http';
import { HttpError } from '../../errors';

test('requires new', t => {
    t.throws(() => {
        HttpError(404);
    }, /cannot be invoked without 'new'/);
});

test('allows all valid http codes', t => {
    Object.entries(http.STATUS_CODES).forEach(([code]) => {
        t.notThrows(() => {
            new HttpError(code);
        });
    });
});