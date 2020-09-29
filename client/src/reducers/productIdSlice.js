import { createSlice } from '@reduxjs/toolkit';

//combine reducers here
const productIdSlice = createSlice({
  name: 'selectedProductId',
  initialState: 1,
  reducers: {
    changeProductId(state, action) {
      const id = action.payload;
      return id;
    },
  },
  prepare(id) {
    return { payload: id };
  },
});

export const { changeProductId } = productIdSlice.actions;
export default productIdSlice.reducer;
