"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function nest(func, args) {
  return (...vals) => {
    const nextArgs = args.concat(vals);

    if (nextArgs.length === func.length) {
      return func(...nextArgs);
    }

    return nest(func, nextArgs);
  };
}
/**
 * Curry a function taking arguments from left to right. The constructor function accepts multiple value arguments. Returned functions also accept multiple arguments.
 * @param fn {Function}
 * @param initialArgs {Array<mixed>} - Comma separated list of arguments. Can be undefined.
 * @returns {Function}
 */


function curry(fn, ...initialArgs) {
  if (fn.length === 0) return fn;
  return nest(fn, initialArgs);
}

var _default = curry;
exports.default = _default;