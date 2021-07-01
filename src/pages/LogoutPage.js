import { Form, Button, Container, Row } from "react-bootstrap";

const LogoutPage = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-sm-center">
          <h2>You've successfully logged out!</h2>
        </Row>
        <Row className="justify-content-sm-center">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default LogoutPage;
