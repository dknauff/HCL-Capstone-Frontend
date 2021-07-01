import { Form, Button, Container, Row } from "react-bootstrap";

const PaymentPage = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-sm-center">
          <h2>Fill out your details below to complete your order</h2>
        </Row>
        <Row className="justify-content-sm-center">
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Cardholder Name" />
            </Form.Group>
            <Form.Group></Form.Group>
            <Form.Group>
              <Form.Control type="text" placeholder="Street Address" />
              <Form.Control type="text" placeholder="City" />
              <Form.Control type="text" placeholder="ZIP" />
              <Form.Control type="text" placeholder="State" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="password" placeholder="Enter Card #" />
              <Form.Control type="password" placeholder="Enter CVV2" />
              <Form.Control type="password" placeholder="Enter Expiry Date" />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button variant="primary" type="submit">
                Place Order
              </Button>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentPage;
