import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const LogoutPage = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    sessionStorage.removeItem("jwt");
    setTimeout(() => {
      setRedirect(true);
    }, 2500);
  }, [redirect]);

  if (redirect) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Container>
        <Row className="justify-content-sm-center">
          <h2>You've successfully logged out!</h2>
        </Row>
      </Container>
    </div>
  );
};

export default LogoutPage;
