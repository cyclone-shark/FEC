import { createSlice } from '@reduxjs/toolkit';

const currentPriceSlice = createSlice({
  name: 'currentPrice',
  initialState: 0,
  reducers: {
    changeCurrentPrice(state, action) {
      const price = action.payload;
      return price;
    },
  },
});

export const { changeCurrentPrice } = currentPriceSlice.actions;
export default currentPriceSlice.reducer;
