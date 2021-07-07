import { useState, useEffect } from "react";

import { Container, Row } from "react-bootstrap";
import AddCategory from "../components/AddCategory";
import DeleteCategory from "../components/DeleteCategory";
import AddProduct from "../components/AddProduct";
import DeleteProduct from "../components/DeleteProduct";
import UpdateOrder from "../components/UpdateOrder";
import { Redirect } from "react-router-dom";
import UpdateProduct from "../components/UpdateProduct";
import UpdateCategory from "../components/UpdateCategory";

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
      <Container>
        <Row className="justify-content-sm-center">
          <h2>Admin Controls</h2>
        </Row>
        <Row className="justify-content-sm-center">
          <h2>Category</h2>
          <AddCategory />
          <DeleteCategory />
          <UpdateCategory />
        </Row>
        <Row className="justify-content-sm-center">
          <h2>Product</h2>
          <AddProduct />
          <DeleteProduct />
          <UpdateProduct />
        </Row>
        <Row className="justify-content-sm-center">
          <h2>Order</h2>
          <UpdateOrder />
        </Row>
      </Container>
    </div>
  );
};
export default AdminPage;
