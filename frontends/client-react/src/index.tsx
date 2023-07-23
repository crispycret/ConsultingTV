import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';

import 'bootstrap/dist/css/bootstrap.css';

import './assets/styles/index.css';

import App from './App';
import reportWebVitals from './analytics/reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// How to use ReactGA:

//Initialize GA4
ReactGA.initialize("G-WJXLN70SCV"); // add your tracking id here.

// For Page Views and Custom Events See:
// https://stackoverflow.com/questions/49279820/adding-google-analytics-to-react

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


const SendAnalytics = ()=> {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);

