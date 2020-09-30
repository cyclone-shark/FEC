import { createSlice } from '@reduxjs/toolkit';

const productStyleSlice = createSlice({
  name: 'selectedProductStyle',
  initialState: 1,
  reducers: {
    changeProductStyle(state, action) {
      const id = action.payload;
      return id;
    },
  },
});

export const { changeProductStyle } = productStyleSlice.actions;
export default productStyleSlice.reducer;
