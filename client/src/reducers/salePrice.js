import { createSlice } from '@reduxjs/toolkit';

const salePriceSlice = createSlice({
  name: 'salePrice',
  initialState: 0,
  reducers: {
    changeSalePrice(state, action) {
      const price = action.payload;
      return price;
    },
  },
});

export const { changeSalePrice } = salePriceSlice.actions;
export default salePriceSlice.reducer;
