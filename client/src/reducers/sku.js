import { createSlice } from '@reduxjs/toolkit';

const skuSlice = createSlice({
  name: 'selectedSKU',
  initialState: '1',
  reducers: {
    changeSKU(state, action) {
      const sku = action.payload;
      return sku;
    },
  },
});

export const { changeStyleSize } = skuSlice.actions;
export default skuSlice.reducer;
