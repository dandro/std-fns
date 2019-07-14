"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Compose a function from all functions passed as arguments from left to right.
 * @param fns {Function} - Comma separated list of functions
 * @returns {function(...[Array<*>]): Function}
 */
function compose(...fns) {
  return function (...args) {
    return fns.slice(1).reduce((result, fn) => fn(result), fns[0](...args));
  };
}

var _default = compose;
exports.default = _default;