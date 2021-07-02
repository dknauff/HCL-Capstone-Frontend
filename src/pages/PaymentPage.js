import { Form, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const deleteCart = async () => {
    await fetch("http://localhost:8080/cart/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
    }).then(() => {
      createCart();
    });
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
              <Link
                className="btn btn-primary"
                to="/purchase"
                onClick={deleteCart}
              >
                Place Order
              </Link>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentPage;
