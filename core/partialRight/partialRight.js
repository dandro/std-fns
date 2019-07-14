"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Partially apply arguments to a function from right to left.
 * @param fn {Function}
 * @param outerArgs {$ReadOnlyArray<mixed>} - Comma separated list of values.
 * @returns {function(...[$ReadOnlyArray<*>]): T}
 */
function partialRight(fn, ...outerArgs) {
  return function (...innerArgs) {
    return fn(...innerArgs.concat(outerArgs));
  };
}

var _default = partialRight;
exports.default = _default;