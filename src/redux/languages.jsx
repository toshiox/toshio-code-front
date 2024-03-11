import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "en",
};

const languagesInfo = {
  getLanguage: (state) => {
    return state;
  },
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload.value;
    }
  }
});

export { languagesInfo };
export const languageActions = languageSlice.actions;
export default languageSlice.reducer;