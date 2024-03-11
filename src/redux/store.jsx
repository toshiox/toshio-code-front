import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languages';

const store = configureStore({
  reducer: {
    language: languageReducer
  }
});

export default store;
