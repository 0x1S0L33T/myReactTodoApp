import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';

ReactDOM.render(
  <div>
    <Header />
    <App />
  </div>,
  document.getElementById('root')
);
