import { createSlice } from '@reduxjs/toolkit';

const styleSizeSlice = createSlice({
  name: 'selectedSize',
  initialState: 'S',
  reducers: {
    changeStyleSize(state, action) {
      const size = action.payload;
      return size;
    },
  },
});

export const { changeStyleSize } = styleSizeSlice.actions;
export default styleSizeSlice.reducer;
