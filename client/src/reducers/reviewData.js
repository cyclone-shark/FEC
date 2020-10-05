import { createSlice } from '@reduxjs/toolkit';

const reviewDataSlice = createSlice({
  name: 'reviewData',
  initialState: [],
  reducers: {
    changeReviewData(state, action) {
      const fullData = action.payload;
      return fullData;
    },
  },
});

export const { changeReviewData } = reviewDataSlice.actions;
export default reviewDataSlice.reducer;