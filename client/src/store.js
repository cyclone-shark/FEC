import { configureStore } from '@reduxjs/toolkit';
import productIdReducer from './reducers/productIdSlice';

const store = configureStore({
  reducer: productIdReducer
});








export default store;