import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ethers } from 'ethers';

window.provider = new ethers.providers.Web3Provider(window.ethereum);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
