import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TriggerAnalysis, TriggerDetails} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TriggerAnalysis />
    <TriggerDetails />
    <App/>
  </React.StrictMode>
);

reportWebVitals();
