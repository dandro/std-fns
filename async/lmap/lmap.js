"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Short for left map, map over the error, or catch, of a promise. The function will only be called if the promise provided has fail.
 * @param fn {Function}
 * @param p {Promise<T | never>}
 * @returns {Promise<T | never>}
 */
function lmap(fn, p) {
  return p.catch(fn);
}

var _default = lmap;
exports.default = _default;