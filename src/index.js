import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App 
  
  bannerHeader={'Shopping Cart'}
  
  />, document.getElementById('root'));
registerServiceWorker();
