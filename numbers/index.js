"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "dec", {
  enumerable: true,
  get: function () {
    return _dec.default;
  }
});
Object.defineProperty(exports, "inc", {
  enumerable: true,
  get: function () {
    return _inc.default;
  }
});
Object.defineProperty(exports, "subtract", {
  enumerable: true,
  get: function () {
    return _subtract.default;
  }
});
Object.defineProperty(exports, "sum", {
  enumerable: true,
  get: function () {
    return _sum.default;
  }
});

var _dec = _interopRequireDefault(require("./dec/dec"));

var _inc = _interopRequireDefault(require("./inc/inc"));

var _subtract = _interopRequireDefault(require("./subtract/subtract"));

var _sum = _interopRequireDefault(require("./sum/sum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }