import loadingReducer from './loading';
import keyWordReducer from './keyWord';
import languageReducer from './languages';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    Loading: loadingReducer,
    KeyWord: keyWordReducer,
    Language: languageReducer
  }
});

export default store;
