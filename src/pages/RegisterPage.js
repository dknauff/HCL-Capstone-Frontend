import { useState } from "react";

import { Form, Button, Container, Row } from "react-bootstrap";

const RegisterPage = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please provide a user and password");
      return;
    }
    let defaultRole = { roles: [{ name: "ROLE_USER" }] };
    onRegister({ username, password, defaultRole });

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-sm-center">
          <h2>Register</h2>
        </Row>
        <Row className="justify-content-sm-center">
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div style={{ textAlign: "center" }}>
              <Button variant="primary" type="submit" value="Register User">
                Submit
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
