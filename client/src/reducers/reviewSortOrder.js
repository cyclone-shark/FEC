import { createSlice } from '@reduxjs/toolkit';

const reviewSortOrderSlice = createSlice({
  name: 'reviewData',
  initialState: 'relevance',
  reducers: {
    changeReviewSortOrder(state, action) {
      const fullData = action.payload;
      return fullData;
    },
  },
});

export const { changeReviewSortOrder } = reviewSortOrderSlice.actions;
export default reviewSortOrderSlice.reducer;