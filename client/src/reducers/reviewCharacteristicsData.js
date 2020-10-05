import { createSlice } from '@reduxjs/toolkit';

const reviewCharacteristicsSlice = createSlice({
  name: 'reviewData',
  initialState: {},
  reducers: {
    changeReviewCharacteristicsData(state, action) {
      const fullData = action.payload;
      return fullData;
    },
  },
});

export const { changeReviewCharacteristics } = reviewCharacteristicsSlice.actions;
export default reviewCharacteristicsSlice.reducer;