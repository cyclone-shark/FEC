import { configureStore } from '@reduxjs/toolkit';
import productIdReducer from './reducers/productIdSlice';
import productStyleReducer from './reducers/productStyle';
import styleSizeReducer from './reducers/styleSize';
import sizeQuantityReducer from './reducers/styleSizeQuantity';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  productId: productIdReducer,
  productStyle: productStyleReducer,
  styleSize: styleSizeReducer,
  styleQuantity: sizeQuantityReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
