import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Signup() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError('');
    setIsFormValid(false); // Reset form validity on username change
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
    setIsFormValid(false); // Reset form validity on password change
  };

  const handleSignupSubmit = () => {
    // Validate username and password
    let isUsernameValid = true;
    let isPasswordValid = true;

    if (username.length < 8 || !/[a-zA-Z]/.test(username)) {
      setUsernameError('Username must be at least 8 characters long and contain at least 1 letter.');
      isUsernameValid = false;
    }

    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least 1 lowercase letter and 1 uppercase letter.'
      );
      isPasswordValid = false;
    }

    // Set form validity based on validation results
    setIsFormValid(isUsernameValid && isPasswordValid);

    // Handle signup logic if validation passes
    if (isUsernameValid && isPasswordValid) {
      // Perform signup actions here
      console.log('Username:', username);
      console.log('Password:', password);
      handleClose();
    }
  };

  return (
    <>
      <a href="#" variant="primary" onClick={handleShow}>
        Signup
      </a>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. r1932521"
                value={username}
                onChange={handleUsernameChange}
              />
              {usernameError && <Form.Text className="text-danger">{usernameError}</Form.Text>}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignupSubmit} disabled={!isFormValid}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup;
