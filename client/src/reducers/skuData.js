import { createSlice } from '@reduxjs/toolkit';

const skuDataSlice = createSlice({
  name: 'selectedSKU',
  initialState: {},
  reducers: {
    changeSkuData(state, action) {
      const sku = action.payload;
      return sku;
    },
  },
});

export const { changeSkuData } = skuDataSlice.actions;
export default skuDataSlice.reducer;
