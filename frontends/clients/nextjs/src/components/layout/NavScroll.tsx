
import { Container, Nav, Navbar } from '@/lib/bootstrap';
import { useMobile, useToggle } from 'eternite/hooks';

import usePosition from 'eternite/hooks/usePosition';
import { useState } from 'react';

function NavScroll() {


  // Find a way to have to transition from transparent to dark
  // At the least find out how to make the navbar immediately dark on scroll not after a delay like it is now
  // const [toggled, toggleWindow] = useToggle()
  const [toggled, setToggle] = useState(false)


  const { mobile } = useMobile()
  const { isTop, isBottom } = usePosition();

  const toggleWindow = () => {
    setToggle(!toggled)
  }

  return (
    <Navbar expand="lg" className={`
      position-fixed w-100 navbar-dark
      ${isTop && !toggled ? 'bg-transparent' : 'bg-dark'} 
    `}
    expanded={toggled} // only need to add this when configuring the nav to detect its expanded state
    onToggle={toggleWindow}
    >
      <Container fluid className={` ${isTop && !toggled ? 'bg-transparent' : 'bg-dark'} `}>
        <Navbar.Brand href="/">CordCutHelp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`me-auto my-2 my-lg-0  bg-dark`}

            style={{ maxHeight: '500px', zIndex: 1000}}
            navbarScroll
          >
            <Nav.Link href="/" className={`${mobile && isTop ? '' : ''}`}>Home</Nav.Link>
            <Nav.Link href="/quote">Quote</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link disabled href="/about">About</Nav.Link>
          </Nav>

          {/* Search Bar */}
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;