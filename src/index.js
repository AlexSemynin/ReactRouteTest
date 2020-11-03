import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const appWraperRout = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

ReactDOM.render(
  appWraperRout,
  document.getElementById('root')
);

reportWebVitals();
