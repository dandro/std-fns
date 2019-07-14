"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Pass a value to a function which returns said value.
 * @param val {T}
 * @returns {T}
 */
function identity(val) {
  return val;
}

var _default = identity;
exports.default = _default;