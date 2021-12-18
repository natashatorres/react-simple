import React from 'react';
import ReactDOM from 'react-dom';
//inserts into the dom
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
