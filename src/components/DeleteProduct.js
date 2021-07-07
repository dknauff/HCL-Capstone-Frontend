import { useState } from "react";

import { Modal, Button, Form } from "react-bootstrap";

const DeleteProduct = () => {
  const [productId, setProductId] = useState(0);
  const [products, setProducts] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    await fetch(`http://localhost:8080/product/instock/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
      body: JSON.stringify(false),
    })
      .then((response) => {
        console.log(response.status);
        if (response.status != 200) {
          setValidated(false);
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
        if (data === "Updated successfully") {
          handleProducts();
        }
      });
  };

  const handleProducts = async () => {
    fetch("http://localhost:8080/product/instock", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const product = [];

        for (const key in data) {
          const prod = {
            id: key,
            ...data[key],
          };

          product.push(prod);
        }
        setProducts(product);
      });
  };
  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
          handleProducts();
        }}
      >
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={submit}>
            <Form.Group controlId="formSelectProduct">
              <Form.Label>Select Product to Delete</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setProductId(e.target.value)}
              >
                {products.map((product) => (
                  <option value={product.productId}>{product.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button variant="primary" type="submit" value="Register User">
                Delete
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteProduct;
