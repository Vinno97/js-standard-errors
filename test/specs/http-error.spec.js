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

test('allows custom messages', t => {
    [
        [new HttpError(2), '2', 'INTERNAL_SERVER_ERROR'],
        [new HttpError('2'), '2', 'INTERNAL_SERVER_ERROR'],
        [new HttpError(404), 'Not Found', 'NOT_FOUND'],
        [new HttpError('400'), 'Bad Request', 'BAD_REQUEST'],
        [new HttpError('asdasdasd'), 'asdasdasd', 'INTERNAL_SERVER_ERROR']
    ].forEach(([error, message, code]) => {
        t.is(error.message, message);
        t.is(error.code, code);
    });
});