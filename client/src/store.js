import { configureStore } from '@reduxjs/toolkit';
import productIdReducer from './reducers/productId';
import productStyleReducer from './reducers/productStyle';
import styleSizeReducer from './reducers/styleSize';
import sizeQuantityReducer from './reducers/styleSizeQuantity';
import skuReducer from './reducers/sku';
import productDataReducer from './reducers/productData';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  productData: productDataReducer,
  productId: productIdReducer,
  productStyle: productStyleReducer,
  styleSize: styleSizeReducer,
  styleQuantity: sizeQuantityReducer,
  sku: skuReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
