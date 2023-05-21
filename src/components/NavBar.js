import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Signup from "./Signup";
import Login from "./Login";

//Error is produced here because the Signup component is an "a" and the Nav.Link is also an "a" so an a tag is nested inside of another a tag

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
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
