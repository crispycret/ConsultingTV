import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';

import './assets/styles/App.css';

import ga4 from 'analytics/ga4';

import { MainLayout } from 'components/layouts/MainLayout';
// import QuotePage from 'pages/QuotePage';
import ComingSoonPage from 'pages/ComingSoonPage';

import HomePage from 'pages/HomePage/index';
import AboutUsPage from 'pages/GPTMade/AboutUsPage';
// import { FinalHomePage } from 'pages/FinalHomePage';

import useTitle from 'utils/common/hooks/useTitle';



function App() {

  useTitle('Cord Cut Help | Simplifying Technology Decisions');

  // Send pageview to GA4
  useEffect(() => {
    ga4.track.page();
  }, []);


  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka', 'Aktiv Grotesk']
      }
    });
   }, []);


  //
  const underMaintenance = false
  const comingSoon = false


  return (
    <div className="App">
      <MainLayout>
        <Routes>
          {/* While under maintence force all routes to the coming soon page */}
          { !underMaintenance  && !comingSoon &&
            <>
              <Route path="/" element={ <HomePage /> } />
              <Route path="/about" element={ <AboutUsPage /> } />

              <Route path="/coming-soon" element={<ComingSoonPage />} />
              <Route path="*" element={<Navigate to="/coming-soon" />} />
            </>
            }
          {/* While under maintence force all routes to the coming soon page */}
          { underMaintenance  && !comingSoon &&
            <>
              {/* <Route path="/" element={<MaintencePage />} /> */}
              <Route path="/coming-soon" element={<ComingSoonPage />} />
              <Route path="*" element={<Navigate to="/coming-soon" />} />
              </>
          }
          {/* While under maintence force all routes to the coming soon page */}
          { !underMaintenance  && comingSoon &&
            <>
              <Route path="/coming-soon" element={<ComingSoonPage />} />
              <Route path="*" element={<Navigate to="/coming-soon" />} />
            </>
          }

        </Routes>

      </MainLayout>
    </div>
  );
}

export default App;
