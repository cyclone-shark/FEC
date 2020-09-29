import { createSlice } from '@reduxjs/toolkit';

//combine reducers here
const productStyleSlice = createSlice({
  name: 'selectedProductStyle',
  initialState: 2,
  reducers: {
    changeProductStyle(state, action) {
      const id = action.payload;
      return id;
    },
  },
  // prepare(id) {
  //   return { payload: id };
  // },
});

export const { changeProductStyle } = productStyleSlice.actions;
export default productStyleSlice.reducer;
