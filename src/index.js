import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {TriggerAnalysis, TriggerDetails} from './components/TriggerAnalysis.js';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
