import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "en",
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

const languagesInfo = {
  getLanguage: (state) => {
    return state;
  },
};

export { languagesInfo };
export const languageActions = languageSlice.actions;
export default languageSlice.reducer;
