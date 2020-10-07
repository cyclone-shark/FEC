"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _productId = _interopRequireDefault(require("./reducers/productId"));

var _styleId = _interopRequireDefault(require("./reducers/styleId"));

var _styleSize = _interopRequireDefault(require("./reducers/styleSize"));

var _styleSizeQuantity = _interopRequireDefault(require("./reducers/styleSizeQuantity"));

var _sku = _interopRequireDefault(require("./reducers/sku"));

var _productData = _interopRequireDefault(require("./reducers/productData"));

var _currentStyleData = _interopRequireDefault(require("./reducers/currentStyleData.js"));

var _skuData = _interopRequireDefault(require("./reducers/skuData.js"));

var _currentPhoto = _interopRequireDefault(require("./reducers/currentPhoto.js"));

var _redux = require("redux");

var _reviewData = _interopRequireDefault(require("./reducers/reviewData"));

var _reviewSortOrder = _interopRequireDefault(require("./reducers/reviewSortOrder"));

var _reviewCharacteristicsData = _interopRequireDefault(require("./reducers/reviewCharacteristicsData"));

var _reviewCount = _interopRequireDefault(require("./reducers/reviewCount"));

var _reviewMetadata = _interopRequireDefault(require("./reducers/reviewMetadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  productData: _productData["default"],
  productId: _productId["default"],
  productStyle: _styleId["default"],
  styleSize: _styleSize["default"],
  styleQuantity: _styleSizeQuantity["default"],
  styleData: _currentStyleData["default"],
  skuData: _skuData["default"],
  sku: _sku["default"],
  reviewData: _reviewData["default"],
  reviewMetadata: _reviewMetadata["default"],
  reviewSortOrder: _reviewSortOrder["default"],
  reviewCharacteristcsData: _reviewCharacteristicsData["default"],
  reviewCount: _reviewCount["default"],
  currentPhoto: _currentPhoto["default"]
});
var store = (0, _toolkit.configureStore)({
  reducer: rootReducer
});
var _default = store;
exports["default"] = _default;