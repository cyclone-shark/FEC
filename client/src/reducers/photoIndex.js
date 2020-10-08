import { createSlice } from '@reduxjs/toolkit';

const photoIndexSlice = createSlice({
  name: 'photoIndex',
  initialState: 0,
  reducers: {
    changePhotoIndex(state, action) {
      const index = action.payload;
      return index;
    },
  },
});

export const { changePhotoIndex } = photoIndexSlice.actions;
export default photoIndexSlice.reducer;
