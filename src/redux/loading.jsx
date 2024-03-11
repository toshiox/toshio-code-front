import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
  isLoading: false
};

const loadingInfo = {
  getLoading: (state) => {
    return state;
  }
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export { loadingInfo };
export const loadingActions = loadingSlice.actions;
export default loadingSlice.reducer;