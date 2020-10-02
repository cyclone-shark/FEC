import { createSlice } from '@reduxjs/toolkit';

const currentPhotoSlice = createSlice({
  name: 'currentPhoto',
  initialState: 'sdfkjsd',
  reducers: {
    changeCurrentPhoto(state, action) {
      const photo = action.payload;
      return photo;
    },
  },
});

export const { changeCurrentPhoto } = currentPhotoSlice.actions;
export default currentPhotoSlice.reducer;
