"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Evaluates all arguments passed and returns the first falsey or last truthy value. It works like && operator.
 * @param args {Array<mixed>}
 * @returns {*}
 */
function and(...args) {
  if (args.length === 1) return args[0];
  return args[0] && and(...args.slice(1));
}

var _default = and;
exports.default = _default;