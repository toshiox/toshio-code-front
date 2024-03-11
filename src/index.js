import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './components/languageSwitcher/i18n';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider  }from "react-router-dom";
import store from './redux/store'

import Home from './views/home/index';
import NotFound from './views/notFound/index';

const router =  createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
    {
      path:'/Home',
      element: <Home />
    },
    {
      path:'*',
      element: <NotFound />
    }
  ],
}]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
