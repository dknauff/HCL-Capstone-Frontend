import { useState } from "react";
import { Redirect } from "react-router-dom";

import { Form, Button, Container, Row } from "react-bootstrap";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errMsgs, setErrMsgs] = useState({});

  const submit = () => {
    const roles = [{ name: "ROLE_USER" }];

    fetch("http://localhost:8080/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        email,
        roles,
      }),
    })
      .then((response) => {
        if (response.status === 400) {
          return { err: true };
        } else {
          setErrMsgs({});
          return response.text();
        }
      })
      .then((text) => {
        if (text && text.err) {
          setErrMsgs({
            ...errMsgs,
            username: "Username taken",
          });
          console.log(errMsgs);
        } else {
          setRedirect(true);
        }
      });
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  const validator = (e) => {
    e.preventDefault();
    let checkValid = true;
    if (username.length < 1 || username.length > 25) {
      setErrMsgs((prevErrMsgs) => ({
        ...prevErrMsgs,
        username: "Invalid length",
      }));
      checkValid = false;
    } else {
      if (errMsgs.username)
        setErrMsgs((prevErrMsgs) => {
          delete prevErrMsgs.username;
          return prevErrMsgs;
        });
    }

    if (password.length < 6 || password.length > 25) {
      setErrMsgs((prevErrMsgs) => ({
        ...prevErrMsgs,
        password: "Invalid length",
      }));
      checkValid = false;
    } else {
      if (errMsgs.password)
        setErrMsgs((prevErrMsgs) => {
          delete prevErrMsgs.password;
          return prevErrMsgs;
        });
    }

    if (email.length < 2 || email.length > 25) {
      setErrMsgs((prevErrMsgs) => ({
        ...prevErrMsgs,
        email: "Invalid email",
      }));
      checkValid = false;
    } else {
      if (errMsgs.email)
        setErrMsgs((prevErrMsgs) => {
          delete prevErrMsgs.email;
          return prevErrMsgs;
        });
    }
    if (checkValid) {
      submit();
    }
  };
  return (
    <div>
      <Container>
        <Row className="justify-content-sm-center">
          <h2>Register</h2>
        </Row>
        <Row className="justify-content-sm-center">
          <Form onSubmit={validator}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errMsgs.username && (
                <span style={{ color: "red" }}>{errMsgs.username}</span>
              )}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errMsgs.email && (
                <span style={{ color: "red" }}>{errMsgs.email}</span>
              )}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errMsgs.password && (
                <span style={{ color: "red" }}>{errMsgs.password}</span>
              )}
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
