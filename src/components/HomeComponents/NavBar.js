import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Signup from "./Signup";
import Login from "./Login";
import Bat from "../../assets/batlogo.jpg";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#"><img src={Bat} width="100" height="100" alt="Bat Logo"/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Nav className="w-100">
            <Navbar.Text className="text-center w-100 h1">
              Riverside Chat App
            </Navbar.Text>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link href="#" style={{textDecoration: 'none'}} >
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
