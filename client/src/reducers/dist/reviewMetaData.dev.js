"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.changeReviewMetadata = void 0;

var _toolkit = require("@reduxjs/toolkit");

var reviewMetadataSlice = (0, _toolkit.createSlice)({
  name: 'reviewMetadata',
  initialState: [],
  reducers: {
    changeReviewMetadata: function changeReviewMetadata(state, action) {
      var fullData = action.payload;
      return fullData;
    }
  }
});
var changeReviewMetadata = reviewMetadataSlice.actions.changeReviewMetadata;
exports.changeReviewMetadata = changeReviewMetadata;
var _default = reviewMetadataSlice.reducer;
exports["default"] = _default;