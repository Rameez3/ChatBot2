import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Signup from "./Signup";
import Login from "./Login";
import myLogo from "../assets/bat.jpg";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" src={myLogo} width="500" height="500" className="d-inline-block align-top" alt="RiverBat Logo"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Nav className="w-100">
            <Navbar.Text className="text-center w-100 h1">
              Riverside Chat App
            </Navbar.Text>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link>
                {<Signup />}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                {<Login />}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
