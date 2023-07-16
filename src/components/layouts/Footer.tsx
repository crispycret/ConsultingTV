import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <Container fluid className="bg-dark text-light text-center py-3 bottom-0">
      <Row>
        <Col md={12} className="mx-auto my-auto text-center">
          <p>
            <a href="https://www.github.com/crispycret" className="text-light mx-1" ><BsGithub /></a>
            <a href="https://www.linkedin.com/in/brandon-nadeau-705123254/" className="text-light mx-1 me-3" ><BsLinkedin /></a>
            &copy; 2023 Brandon Nadeau. All rights reserved. | Built with React and Bootstrap using TypeScript. <a href="https://github.com/crispycret/portfolio">View Source</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}



export default Footer;