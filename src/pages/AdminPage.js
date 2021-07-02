import { useState, useEffect } from "react";

import { Form, Button, Container, Row } from "react-bootstrap";
import AddCategory from "../components/AddCategory";
import DeleteCategory from "../components/DeleteCategory";
import AddProduct from "../components/AddProduct";
import DeleteProduct from "../components/DeleteProduct";
import UpdateOrder from "../components/UpdateOrder";

const AdminPage = () => {
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
        </Row>
        <Row className="justify-content-sm-center">
          <h2>Product</h2>
          <AddProduct />
          <DeleteProduct />
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
