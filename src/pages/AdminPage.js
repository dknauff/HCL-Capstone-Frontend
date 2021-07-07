import { useState, useEffect } from "react";

import { Container, Row, Nav } from "react-bootstrap";
import AddCategory from "../components/AddCategory";
import DeleteCategory from "../components/DeleteCategory";
import AddProduct from "../components/AddProduct";
import DeleteProduct from "../components/DeleteProduct";
import UpdateOrder from "../components/UpdateOrder";
import { Redirect } from "react-router-dom";
import UpdateProduct from "../components/UpdateProduct";
import UpdateCategory from "../components/UpdateCategory";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/users/role", {
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
        if (!data.includes("ROLE_ADMIN")) {
          setRedirect(true);
        }
        setIsLoading(false);
      });
  });

  if (redirect) {
    return <Redirect to="/" />;
  }
  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div style={{ textAlign: "right" }}>
        <Nav.Link>
          <Link to="/logout">Logout</Link>
        </Nav.Link>
      </div>
      <Container>
        <Row className="justify-content-sm-center">
          <h2>Admin Controls</h2>
        </Row>
        <Row className="justify-content-sm-center">
          <h2 style={{ paddingRight: "25px" }}>Category</h2>
          <div style={{ paddingRight: "25px" }}>
            <AddCategory />
          </div>
          <div style={{ paddingRight: "25px" }}>
            <UpdateCategory />
          </div>
          <div style={{ paddingRight: "25px" }}>
            <DeleteCategory />
          </div>
        </Row>
        <Row className="justify-content-sm-center">
          <h2 style={{ paddingRight: "25px" }}>Product</h2>
          <div style={{ paddingRight: "25px" }}>
            <AddProduct />
          </div>
          <div style={{ paddingRight: "25px" }}>
            <UpdateProduct />
          </div>
          <div style={{ paddingRight: "25px" }}>
            <DeleteProduct />
          </div>
        </Row>
        <Row className="justify-content-sm-center">
          <h2 style={{ paddingRight: "25px" }}>Order</h2>
          <UpdateOrder />
        </Row>
      </Container>
    </div>
  );
};
export default AdminPage;
