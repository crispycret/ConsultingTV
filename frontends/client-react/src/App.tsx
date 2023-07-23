import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import './assets/styles/App.css';

import { MainLayout } from 'components/layouts/MainLayout';
import { HomePage } from 'pages/HomePage';
import QuotePage from 'pages/QuotePage';
import ComingSoonPage from 'pages/ComingSoonPage';
import { TestPage } from 'pages/TestPage';

function App() {

  const underMaintenance = true

  return (
    <div className="App">
      <MainLayout>
        <Routes>
          {/* While under maintence force all routes to the coming soon page */}
          { underMaintenance ?
          <>
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="/test" element={<TestPage to='/test1'/>} />
            <Route path="/test1" element={<TestPage to='/test2'/>} />
            <Route path="/test2" element={<TestPage to='/test3'/>} />
            <Route path="/test3" element={<TestPage to='/test'/>} />
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
