import React from "react";
import Link from 'next/link'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import useMobile from "eternite/hooks/useMobile";

import { Col, Container, Row } from "@/lib/bootstrap";
import { SEOLoader } from "../utils/seo";

// import { Link, Navigate } from "react-router-dom";

export const Footer = () => {

  const mobile = useMobile()

  return (
    <Container fluid className="bg-dark text-light text-center bottom-0 py-3">
      <SEOLoader jsonLd={{
        "@context": "https://schema.org",
        "@type": "Footer",
        "name": "Cord Cut Help Footer",
        "url": "https://cordcuthelp.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-123-456-7890",
            "email": "example@email.com",
            "contactType": "customer support"
          }
        ],
        "author": {
          "@type": "Person",
          "name": "Cord Cut Help",
        },
      }} />
      <Row>

      <Col md={mobile ? 4 : 12} className={`mx-auto my-auto ${mobile ? '' : 'text-end'}`}>
            <p className='h5'>
            <a href="https://www.facebook.com/cordcuthelp/" className="text-light mx-1" ><BsFacebook /></a>
            <a href="https://www.linkedin.com/company/cord-cut-help/" className="text-light mx-5" ><BsLinkedin /></a>
            {/* <a href="https://www.instagram.com" className="text-light mx-1" ><BsInstagram /></a> */}
            <a href="https://www.twitter.com" className="text-light mx-1" ><BsTwitter /></a>
            </p>
        </Col>
        
        <Col md={mobile ? 12 : 4} className="mx-auto h6 mt-2 mb-0 text-center">
          <p>
            Copyright &copy; 2023 Consulting.TV {!mobile && "All rights reserved"} 
          </p>
        </Col>

        <Col md={mobile ? 4 : 12} className={`mx-auto ${mobile ? '' : 'text-start'}`}>
          <div className='h6 text-decoration-none'>
          <Link href='/cookies' className="mx-1 text-light text-decoration-none">Cookies</Link>
          <Link href='/privacy' className="mx-1 text-light text-decoration-none">Privacy</Link>
          <Link href='/terms' className="mx-1 text-light text-decoration-none">Terms</Link>
          <Link href='/legal' className="mx-1 text-light text-decoration-none">Legal</Link>



          {/* <Link to='/contact' className="mx-1 text-light text-decoration-none">Contact</Link> */}
          {/* <Link to='/contact' className="mx-1 text-light text-decoration-none">About</Link> */}
          {/* <Link to='/contact' className="mx-1 text-light text-decoration-none">Sitemap</Link> */}
          {/* <Link to='/contact' className="mx-1 text-light text-decoration-none">FAQ</Link> */}
          {/* <Link to='/contact' className="mx-1 text-light text-decoration-none">Blog</Link>           */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default Footer;