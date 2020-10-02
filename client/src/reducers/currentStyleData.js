import { createSlice } from '@reduxjs/toolkit';

const styleDataSlice = createSlice({
  name: 'styleData',
  initialState: {},
  reducers: {
    changeStyleData(state, action) {
      const styleData = action.payload;
      return styleData;
    },
  },
});

export const { changeStyleData } = styleDataSlice.actions;
export default styleDataSlice.reducer;
