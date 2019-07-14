"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Map over the value of a promise. The map function will only be called if the promise is resolved.
 * @param fn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<T | never>}
 */
function map(fn, p) {
  return p.then(fn);
}

var _default = map;
exports.default = _default;