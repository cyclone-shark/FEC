import { createSlice } from '@reduxjs/toolkit';

const skuSlice = createSlice({
  name: 'selectedSKU',
  initialState: '',
  reducers: {
    changeSKU(state, action) {
      const sku = action.payload;
      return sku;
    },
  },
});

export const { changeSKU } = skuSlice.actions;
export default skuSlice.reducer;
