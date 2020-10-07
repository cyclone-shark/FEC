import { createSlice } from '@reduxjs/toolkit';

const reviewMetadataSlice = createSlice({
  name: 'reviewMetadata',
  initialState: [],
  reducers: {
    changeReviewMetadata(state, action) {
      const fullData = action.payload;
      return fullData;
    },
  },
});

export const { changeReviewMetadata } = reviewMetadataSlice.actions;
export default reviewMetadataSlice.reducer;