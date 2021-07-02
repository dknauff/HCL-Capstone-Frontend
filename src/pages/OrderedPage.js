import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const OrderedPage = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 2500);
  }, [redirect]);

  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Container>
        <Row className="justify-content-sm-center">
          <h2>Thank you for your order!</h2>
        </Row>
      </Container>
    </div>
  );
};

export default OrderedPage;
