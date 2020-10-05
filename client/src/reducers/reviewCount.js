import { createSlice } from '@reduxjs/toolkit';

const reviewCountSlice = createSlice({
  name: 'reviewData',
  initialState: 0,
  reducers: {
    changeReviewCount(state, action) {
      const fullData = action.payload;
      return fullData;
    },
  },
});

export const { changeReviewCount } = reviewCountSlice.actions;
export default reviewCountSlice.reducer;