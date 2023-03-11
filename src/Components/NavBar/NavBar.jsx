import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from '../CustomLink/index'


function NavBar() {
  return (
    <>
    {['md'].map((expand) => (
      <Navbar key={expand} bg="light" expand={expand} className="mb-3" sticky="top">
        <Container fluid>
          <Navbar.Brand><Link to='/' name='Company Name'></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link> <Link style={{}} to='/' name='Home'></Link></Nav.Link>
                <Nav.Link> <Link style={{}} to='/About' name='About'></Link></Nav.Link>
                <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                  <NavDropdown.Item>
                  <Link to='/Men' name='Men'></Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/Women' name='Women'></Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                  <Link to='/Kids' name='Kids'></Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                  <Link to='/Miscellaneous' name='Miscellaneous'></Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
    </Navbar>
    ))}
  </>
  );
}

export default NavBar;