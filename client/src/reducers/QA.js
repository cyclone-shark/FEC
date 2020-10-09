import { createSlice } from '@reduxjs/toolkit';

const QAListSlice = createSlice({
  name: 'QAList',
  initialState: [],
  reducers: {
    upDateList(state, action){
      const fullList = action.payload;
      return fullList
    }
  }
})

export const {upDateList} = QAListSlice.actions;
export default QAListSlice.reducer;