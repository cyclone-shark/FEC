import { createSlice } from '@reduxjs/toolkit';

const styleSizeSlice = createSlice({
  name: 'selectedSize',
  initialState: 'S',
  reducers: {
    changeStleSize(state, action) {
      const size = action.payload;
      return size;
    },
  },
});

export const { changeStyleSize } = styleSizeSlice.actions;
export default styleSizeSlice.reducer;
