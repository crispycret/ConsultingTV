
import { Container, Nav, Navbar } from 'react-bootstrap';
import usePosition from 'utils/common/hooks/usePosition';

function NavScroll() {

  const { isTop, isBottom } = usePosition();
  
  return (
    // <Navbar expand="lg" className="bg-body-tertiary bg-transparent position-fixed w-100">
    <Navbar expand="lg" className={`${isTop ? 'bg-transparent' : 'bg-dark'} position-fixed w-100 navbar-dark`}>
      <Container fluid>
        <Navbar.Brand href="/">CordCutHelp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/quote">Quote</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>

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