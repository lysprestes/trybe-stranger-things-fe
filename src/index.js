import Dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Dotenv.config();
const reactDev = (process.env.REACT_APP_DEV === 'true');

ReactDOM.render(
  <React.StrictMode>
    {
      reactDev ? <div>Em desenvolvimento...</div> : null
    }
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
