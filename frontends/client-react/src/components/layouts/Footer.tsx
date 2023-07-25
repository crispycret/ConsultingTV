import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import useMobile from "utils/common/hooks/useMobile";

export const Footer = () => {

  const mobile = useMobile()

  return (
    <Container fluid className="bg-dark text-light text-center bottom-0">
      <Row>

      <Col md={mobile ? 4 : 12} className={`mx-auto my-auto ${mobile ? '' : 'text-end'}`}>
            <p className='h5'>
                <a href="https://www.instagram.com" className="text-light mx-1" ><BsInstagram /></a>
                <a href="https://www.twitter.com" className="text-light mx-5" ><BsTwitter /></a>
                <a href="https://www.facebook.com" className="text-light mx-1" ><BsFacebook /></a>
            </p>
        </Col>
        
        <Col md={mobile ? 12 : 4} className="mx-auto h6 mt-2 mb-0 text-center">
          <p>
            Copyright &copy; 2023 Consulting.TV {!mobile && "All rights reserved"} 
          </p>
        </Col>

        <Col md={mobile ? 4 : 12} className={`mx-auto ${mobile ? '' : 'text-start'}`}>
          <div className='h6 text-decoration-none'>
          {/* <Link to='/contact' className="mx-1 text-light text-decoration-none">Contact</Link> */}
          <Link to='/cookies' className="mx-1 text-light text-decoration-none">Cookies</Link>
          <Link to='/privacy' className="mx-1 text-light text-decoration-none">Privacy</Link>
          <Link to='/terms' className="mx-1 text-light text-decoration-none">Terms</Link>
          <Link to='/legal' className="mx-1 text-light text-decoration-none">Legal</Link>
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