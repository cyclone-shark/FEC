import { createSlice } from '@reduxjs/toolkit';

const productDataSlice = createSlice({
  name: 'productData',
  initialState: {},
  reducers: {
    changeProductData(state, action) {
      const fullData = action.payload;
      return fullData;
    },
  },
});

export const { changeProductData } = changeProductData.actions;
export default productDataSlice.reducer;
