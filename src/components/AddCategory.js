import { useState, useEffect } from "react";

import { Modal, Button, Form } from "react-bootstrap";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    await fetch("http://localhost:8080/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        categoryName,
      }),
    }).then((response) => {
      console.log(response.status);
      if (response.status === 401) {
        console.log("REDIRECT USER TO LOG IN");
        return;
      }
      if (response.status != 201) {
        setValidated(false);
      }
    });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={submit}>
            <Form.Group controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Category Name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a category name.
              </Form.Control.Feedback>
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

export default AddCategory;
