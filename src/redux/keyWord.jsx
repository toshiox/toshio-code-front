import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
  keyWord: ''
};

const keyWordInfo = {
  getvalue: (state) => {
    return state;
  }
};

const keyWordSlice = createSlice({
  name: 'keyWord',
  initialState,
  reducers: {
    setKeyWord: (state, action) => {
      state.keyWord = action.payload.value;
    },
  },
});

export { keyWordInfo };
export const keyWordActions = keyWordSlice.actions;
export default keyWordSlice.reducer;