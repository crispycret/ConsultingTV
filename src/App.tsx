import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './assets/styles/App.css';

import { MainLayout } from 'components/layouts/MainLayout';
import { HomePage } from 'pages/HomePage';
import QuotePage from 'pages/QuotePage';
import ComingSoonPage from 'pages/ComingSoonPage';

function App() {

  const underMaintenance = true

  return (
    <div className="App">
      
      <MainLayout>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="quote" element={<QuestionaireForm />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="dashboard" element={<Contact />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        */}
            {/* <Route index element={<HomePage />} /> */}

            { underMaintenance ?
              <Route index path='/' element={<ComingSoonPage />} />
            :
              <>
                <Route index path='/' element={<HomePage />} />
                <Route path="/quote" element={<QuotePage />} />
              </>
            }

        
          {/* <Route path="/" element={<div className='p-5 m-5'>INDEX</div>}>
            <Route path="quote" element={<QuestionaireForm />} />
            <Route path="*" element={<div className='p-5 m-5'>404 NOT FOUND</div>} />
          </Route>  */}
         

          </Routes> 

      </MainLayout>
    </div>
  );
}

export default App;
