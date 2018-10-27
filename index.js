const _require = require('esm')(module);
const main = _require('./main.js');
delete main.default;

module.exports = main;
