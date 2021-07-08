import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const LogoutPage = () => {
  useEffect(() => {
    sessionStorage.removeItem("jwt");
    setTimeout(() => {
      signOut();
    }, 2500);
  });

  const signOut = async () => {
    await fetch("http://localhost:8080/users/role", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

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
