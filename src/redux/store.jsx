import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languages';
import Loading from './loading';

const store = configureStore({
  reducer: {
    Language: languageReducer,
    Loading: Loading
  }
});

export default store;
