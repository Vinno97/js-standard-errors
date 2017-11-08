# js-standard-errors

This package contains a number of errors that I thought were missing in vanilla Javascript. There
are currently just two errors in this package, but I plan to add more errors when I need one in
a project.

All errors also have a unique `code` attribute to conform to the [direction](https://nodejs.org/en/blog/release/v8.0.0/#static-error-codes) that the core Node.JS-team is taking
with their errors. They also have a `name` attribute that matches their constructor name.

For example, `new NotImplementedError()` results in an error with the following attributes:

```json
{
  "code": "ERR_NOT_IMPLEMENTED",
  "message": "Method is not implemented",
  "name": "NotImplementedError",
  "stack": "NotImplementedError: Method is not implemented
    at Object.<anonymous> (/path/to/your/file.js:1:1)
    at Module._compile (module.js:609:14)
    at Object.Module._extensions..js (module.js:623:10)
    at Module.load (module.js:531:32)
    at tryModuleLoad (module.js:494:12)
    at Function.Module._load (module.js:486:3)
    at Function.Module.runMain (module.js:653:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3"
}

```

## Included errors

* ArgumentError (`ERR_INVALID_ARGUMENT`)
* NotImplementedError (`ERR_NOT_IMPLEMENTED`)

## Implementing custom errors

The standard Javascript `Error` implementation is not that easy to extend using ES6 classes. That is why this package also exposes `ExtendableError`: an easy to extend ES6 class that wraps `Error`.

```js
const { ExtendableError } = require('js-standard-errors');

class CustomError extends ExtendableError {
  constructor(message, options) {
    super(message || 'There was an error', 'ERR_CUSTOM_ERROR', options);
  }
}

module.exports = ArgumentError;
```
