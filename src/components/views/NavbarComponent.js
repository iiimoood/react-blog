import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="mt-4 mb-4 rounded"
    >
      <span className="text-light align-items-center col-3 ms-2">Blog.app</span>
      <Nav className="justify-content-end col-9">
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/about" className="me-3">
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
