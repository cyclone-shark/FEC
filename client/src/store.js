import { configureStore } from '@reduxjs/toolkit';
import productIdReducer from './reducers/productId';
import productStyleReducer from './reducers/styleId';
import styleSizeReducer from './reducers/styleSize';
import sizeQuantityReducer from './reducers/styleSizeQuantity';
import skuReducer from './reducers/sku';
import productDataReducer from './reducers/productData';
import styleDataReducer from './reducers/currentStyleData.js';
import skuDataReducer from './reducers/skuData.js';
import currentPhotoReducer from './reducers/currentPhoto.js';
import { combineReducers } from 'redux';
import reviewDataReducer from './reducers/reviewData';
import reviewSortOrderReducer from './reducers/reviewSortOrder';
import reviewCharacteristicsDataReducer from './reducers/reviewCharacteristicsData';
import reviewCountReducer from './reducers/reviewCount';
import reviewMetadataReducer from './reducers/reviewMetadata'

const rootReducer = combineReducers({
  productData: productDataReducer,
  productId: productIdReducer,
  productStyle: productStyleReducer,
  styleSize: styleSizeReducer,
  styleQuantity: sizeQuantityReducer,
  styleData: styleDataReducer,
  skuData: skuDataReducer,
  sku: skuReducer,
  reviewData: reviewDataReducer,
  reviewMetadata: reviewMetadataReducer,
  reviewSortOrder: reviewSortOrderReducer,
  reviewCharacteristcsData: reviewCharacteristicsDataReducer,
  reviewCount: reviewCountReducer,
  currentPhoto: currentPhotoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
