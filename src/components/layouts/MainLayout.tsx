


// import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import 'assets/styles/mainlayout.css'

// import useMobile from 'utils/common/hooks/useMobile';

import NavScroll from './NavScroll';
import Footer  from 'components/layouts/Footer';


export const MainLayout = ({ children }: any) => {

  // const { mobile } = useMobile()

  return (
    <div className="d-flex flex-column min-vh-100">

      <NavScroll />
      
      <main className="flex-grow-1 bg-light">
        { children }
      </main>

      <Footer />
      
    </div>

    // <div className="">
    //   <NavScroll />
    //   <main className=''>{children}</main>
    //   <Footer />
    // </div>
  );
};


