"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Map over the success or error of a promise.
 * @param leftFn {Function}
 * @param rightFn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<R | never>}
 */
function bimap(leftFn, rightFn, p) {
  return p.then(rightFn, e => Promise.reject(leftFn(e)));
}

var _default = bimap;
exports.default = _default;