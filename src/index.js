import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import './markdown-style.scss';

import App from './containers/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
