import { createSlice } from '@reduxjs/toolkit';

//combine reducers here
const styleSizeSlice = createSlice({
  name: 'selectedSize',
  initialState: 'S',
  reducers: {
    changeStleSize(state, action) {
      const size = action.payload;
      return size;
    },
  },
  // prepare(id) {
  //   return { payload: id };
  // },
});

export const { changeStyleSize } = styleSizeSlice.actions;
export default styleSizeSlice.reducer;
