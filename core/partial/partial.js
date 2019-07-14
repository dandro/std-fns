"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Partially apply arguments to a function from left to right.
 * @param fn {Function}
 * @param args {$ReadOnlyArray<mixed>} - Comma separated list of values.
 * @returns {function(...[$ReadOnlyArray<*>]): T}
 */
function partial(fn, ...args) {
  return fn.bind(null, ...args);
}

var _default = partial;
exports.default = _default;