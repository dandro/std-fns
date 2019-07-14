"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bimap", {
  enumerable: true,
  get: function () {
    return _bimap.default;
  }
});
Object.defineProperty(exports, "fmap", {
  enumerable: true,
  get: function () {
    return _fmap.default;
  }
});
Object.defineProperty(exports, "lmap", {
  enumerable: true,
  get: function () {
    return _lmap.default;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function () {
    return _map.default;
  }
});
Object.defineProperty(exports, "tap", {
  enumerable: true,
  get: function () {
    return _tap.default;
  }
});

var _bimap = _interopRequireDefault(require("./bimap/bimap"));

var _fmap = _interopRequireDefault(require("./fmap/fmap"));

var _lmap = _interopRequireDefault(require("./lmap/lmap"));

var _map = _interopRequireDefault(require("./map/map"));

var _tap = _interopRequireDefault(require("./tap/tap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }