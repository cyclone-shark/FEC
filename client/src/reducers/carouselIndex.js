import { createSlice } from '@reduxjs/toolkit';

const carouselIndexSlice = createSlice({
  name: 'carouselIndex',
  initialState: 0,
  reducers: {
    changeCarouselIndex(state, action) {
      const i = action.payload;
      return i;
    },
  },
});

export const { changeCarouselIndex } = carouselIndexSlice.actions;
export default carouselIndexSlice.reducer;
