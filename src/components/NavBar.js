import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import Signup from "./components/Signup";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#signup" onClick="{<Signup/>}">Sign Up</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;