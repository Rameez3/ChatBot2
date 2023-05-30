import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Login from "./Login";
import axios from 'axios';

function Signup() {
  const [show, setShow] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordValid2, setPasswordValid2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const handleConfirmPasswordChange = (e) => {
    let errorMsg = document.getElementById('confirm_password');
    let confirmPasswordField = document.getElementById('confirmPasswordField');
    let password = document.getElementById('passwordField').value;
    let confirmPassword = e.target.value;

    if (password === confirmPassword) {
      setPasswordValid2(true);
      confirmPasswordField.style.backgroundColor = 'transparent';
      confirmPasswordField.style.borderColor = 'green';
      errorMsg.textContent = "";
    } else {
      setPasswordValid2(false);
      errorMsg.style.color = 'red';
      confirmPasswordField.style.backgroundColor = '#fbe9e8';
      confirmPasswordField.style.borderColor = 'red';
      errorMsg.textContent = 'Passwords do not match.';
    }
  };

  const handleSubmit = () => {
    handleClose();

    // Get the username and password values from the form fields
    const username = document.getElementById('usernameField').value;
    const password = document.getElementById('passwordField').value;

    // Create an object with the username and password
    const userData = {
      username: username,
      password: password
    };

    axios.post('http://localhost:3000/api/signup', userData)
      .then(response => {
        if (response.status === 200) {
          alert('Successfully signed up!');
        } else if (response.status === 400 && response.data.error === 'Bad Request') {
          alert('Username already exists');
        } else {
          alert('Signup failed!');
        }
      })
      .catch(error => {
        console.error('Error submitting data:', error);
        alert('Signup failed!');
      });
  };

  const openLogin = () => {
    handleClose(); // Close the login modal
    Login.openModal(); // Open the signup modal
  };

  function openModal() {
    handleShow();
  }

  const isFormValid = usernameValid && passwordValid && passwordValid2;

  Signup.openModal = openModal;

  return (
    <>
      <a href="#" variant="primary" onClick={handleShow}>
        Signup
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
          <Modal.Title>Signup</Modal.Title>
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

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password: </Form.Label>
              <Form.Control
                onChange={handleConfirmPasswordChange}
                disabled={!passwordValid}
                type="password"
                id="confirmPasswordField"
                aria-required="true"
                placeholder="Enter password again"
              />
              <br />
              <p id="confirm_password"></p>
            </Form.Group>
            <Form.Group>
              <h6 className="text-center">Already have an account? <a href='#' onClick={openLogin} className="text-decoration-none">Login</a></h6>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" disabled={!isFormValid} onClick={handleSubmit}>
            Signup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Signup;
