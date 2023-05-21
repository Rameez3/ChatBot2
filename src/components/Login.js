import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Login() {
    
    const [show, setShow] = useState(false);
    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUsernameChange = (e) => {
        console.log("Received Username: " + e.target.value);
    };

    const handlePasswordChange = (e) => {
        console.log("Received Password: " + e.target.value);
    };

    const handleSubmit = () => {
        console.log("Submitted!");
    }

    const isFormValid = true;

    return (
        <>
        <a href="#" variant="primary" onClick={handleShow}>
          Login
        </a>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          centered
        >
          <Modal.Header closeButton style={{ display: 'flex', justifyContent: 'center' }}>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>ACC ID: </Form.Label>
                <Form.Control
                  onChange={handleUsernameChange}
                  type="text"
                  placeholder="Ex. r1932521"
                  id="usernameField"
                  aria-required = "true"
                  autoFocus
                />
                <br />
                <p id="username_requirements"></p>
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  onChange={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  aria-required = "true"
                  id="passwordField"
                />
                <br />
                <p id="password_requirements"></p>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" disabled={!isFormValid} onClick={handleSubmit}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
};


export default Login;