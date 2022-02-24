import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'

// const store = configureStore()

ReactDOM.render(
  <BrowserRouter>
      {/* <Provider  store={store}> */}
          <App/>  
      {/* </Provider> */}
  </BrowserRouter>
,document.getElementById('root'))

