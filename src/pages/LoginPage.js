import { cloneElement, useState } from "react";
import { Redirect } from "react-router-dom";

import { Link } from "react-router-dom";

import { Form, Button, Container, Row } from "react-bootstrap";

const LoginPage = (params) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(0);
  const [errMsg, setErrMsg] = useState("");
  const [role, setRole] = useState([]);

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/users/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const content = await response.json();
    if (content.jwtToken) {
      const jwt = content.jwtToken;
      sessionStorage.setItem("jwt", jwt);
      checkRole();
    } else {
      console.log(content.message);
      setErrMsg(content.message);
    }
  };

  const createCart = async () => {
    await fetch("http://localhost:8080/cart/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
      body: JSON.stringify({}),
    });
  };

  const checkRole = async () => {
    await fetch("http://localhost:8080/users/role", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          (sessionStorage.getItem("jwt") ? sessionStorage.getItem("jwt") : ""),
      },
    })
      .then((response) => {
        console.log("RESPONSE");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        sessionStorage.setItem("role", data);
        params.setRoles(data);
        if (data.includes("ROLE_USER")) {
          createCart();
          setRedirect(1);
        } else {
          setRedirect(2);
        }
      });
  };

  if (redirect === 1) {
    return <Redirect to="/" />;
  }

  if (redirect === 2) {
    return <Redirect to="/adminpage" />;
  }

  return (
    <div>
      <Container>
        <Row className="justify-content-sm-center">
          <h2>Login</h2>
        </Row>
        <Row className="justify-content-sm-center">
          {errMsg && <span style={{ color: "red" }}>Bad Credentials</span>}
        </Row>
        <Row className="justify-content-sm-center">
          <Form onSubmit={submit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="primary"
                type="submit"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                Submit
              </Button>
              <Link
                className="btn btn-success"
                to="/register"
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                New?
              </Link>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
