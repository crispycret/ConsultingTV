import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/index.css';

import ga4 from './analytics/google-analytics';
// import reportWebVitals from './analytics/reportWebVitals';

import App from './App';


//Initialize GA4
ga4.initialize();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// const SendAnalytics = ()=> {
//   console.log("SendAnalytics() -> ", window.location.pathname);
//   ReactGA.send({
//     hitType: "pageview",
//     page: window.location.pathname,
//   });
// }


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(SendAnalytics);

