import React, { useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import './assets/styles/App.css';

import ga4 from 'analytics/ga4';

import { MainLayout } from 'components/layouts/MainLayout';
import { HomePage } from 'pages/HomePage';
import QuotePage from 'pages/QuotePage';
import ComingSoonPage from 'pages/ComingSoonPage';


import useTitle from 'utils/common/hooks/useTitle';

function App() {

  useTitle('Cord Cut Help');

  // Send pageview to GA4
  useEffect(() => {
    ga4.track.page();
  }, []);



  const underMaintenance = true

  return (
    <div className="App">
      <MainLayout>
        <Routes>
          {/* While under maintence force all routes to the coming soon page */}
          { underMaintenance ?
          <>
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="*" element={<Navigate to="/coming-soon" />} />
          </>
          :
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        }
        </Routes>

      </MainLayout>
    </div>
  );
}

export default App;
