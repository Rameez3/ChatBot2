import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Signup from "./Signup";
import axios from 'axios';

function Login() {

  const [show, setShow] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const handleCloseLogin = () => setShow(false);
  const handleShowLogin = () => setShow(true);

  const isFormValid = true;

  const handleUsernameChange = (e) => {
    let errorMsg = document.getElementById('username_requirements');
    let usernameField = document.getElementById('usernameField');
    let username = e.target.value;

    if (/^[a-zA-Z].{7}$/.test(username)) {
      setUsernameValid(true);
      errorMsg.textContent = "";
      usernameField.style.backgroundColor = 'transparent';
      usernameField.style.borderColor = 'green';

    } else {
      setUsernameValid(false);
      errorMsg.style.color = 'red';
      usernameField.style.backgroundColor = '#fbe9e8';
      usernameField.style.borderColor = 'red';
      errorMsg.textContent = "Username must contain at least 1 letter at the beginning and must be 8 characters long.";
    }
  };

  const handlePasswordChange = (e) => {
    let errorMsg = document.getElementById('password_requirements');
    let passwordField = document.getElementById('passwordField');
    let password = e.target.value;

    if (/^(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(password)) {
      setPasswordValid(true);
      errorMsg.textContent = "";
      passwordField.style.backgroundColor = 'transparent';
      passwordField.style.borderColor = 'green';
    } else {
      setPasswordValid(false);
      errorMsg.style.color = 'red';
      passwordField.style.backgroundColor = '#fbe9e8';
      passwordField.style.borderColor = 'red';
      errorMsg.textContent = 'Password must be at least 8 characters long and must contain at least one capital letter and one symbol.';
    }
  };

  const handleSubmit = () => {

    // Get the username and password values from the form fields
    const username = document.getElementById('usernameField').value;
    const password = document.getElementById('passwordField').value;

    // Create an object with the username and password
    const userData = {
      username: username,
      password: password
    };

    axios.post('http://localhost:3000/api/login', userData)
      .then(response => {
        if (response.status === 200) {
          alert('Login successful!');
          // Perform any additional actions or redirections upon successful login
        } else if (response.status === 401) {
          alert('Invalid username or password');
        } else {
          alert('Login failed!');
        }
      })
      .catch(error => {
        console.error('Error submitting data:', error);
        alert('Login failed!');
      });
  };

  const openSignup = () => {
    handleCloseLogin(); // Close the login modal
    Signup.openModal(); // Open the signup modal
  };

  function openModal() {
    handleShowLogin();
  }

  Login.openModal = openModal;


  return (
    <>
      <a href="#" variant="primary" onClick={handleShowLogin} style={{textDecoration: 'none'}}>
        Login
      </a>

      <Modal
        show={show}
        onHide={handleCloseLogin}
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
                aria-required="true"
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
                aria-required="true"
                id="passwordField"
              />
              <br />
              <p id="password_requirements"></p>
            </Form.Group>
            <Form.Group>
              <h6 className="text-center">Don't have an account? <a href='#' onClick={openSignup} className="text-decoration-none">Signup</a></h6>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogin}>
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