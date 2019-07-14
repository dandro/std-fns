"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Trims a string. Works like the string trim method.
 * @param val
 * @returns {string}
 */
function trim(val) {
  return String.prototype.trim.call(val);
}

var _default = trim;
exports.default = _default;