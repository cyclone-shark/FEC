import { createSlice } from '@reduxjs/toolkit';

const sizeQuantitySlice = createSlice({
  name: 'selectedQuantity',
  initialState: 1,
  reducers: {
    changeProductQuantity(state, action) {
      const quantity = action.payload;
      return quantity;
    },
  },
});

export const { changeProductQuantity } = sizeQuantitySlice.actions;
export default sizeQuantitySlice.reducer;
