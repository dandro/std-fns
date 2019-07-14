"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Creates a function which always returns the same value.
 * @param val {*}
 * @returns {function(): T}
 */
function always(val) {
  return function alwaysValue() {
    return val;
  };
}

var _default = always;
exports.default = _default;