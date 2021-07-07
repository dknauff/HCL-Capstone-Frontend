import { useState, useEffect } from "react";

import { Modal, Button, Form } from "react-bootstrap";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState(0);

  const [categories, setCategories] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    console.log(categoryId);

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    await fetch("http://localhost:8080/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        name,
        description,
        price,
        imageUrl,
        category: {
          categoryId: categoryId,
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.status);
      });
  };

  const handleCategories = async () => {
    fetch("http://localhost:8080/category/instock", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dataCat = [];

        for (const key in data) {
          const cat = {
            id: key,
            ...data[key],
          };

          dataCat.push(cat);
        }
        setCategories(dataCat);
      });
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          handleShow();
          handleCategories();
        }}
      >
        Add
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={submit}>
            <Form.Group controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a product name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formProductDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a description.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter URL for image"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formSelectCategory">
              <Form.Label>Select Category</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {categories.map((cat) => (
                  <option value={cat.categoryId}>{cat.categoryName}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button variant="primary" type="submit" value="Register User">
                ADD
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddProduct;
