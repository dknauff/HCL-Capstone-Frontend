import { useState, useEffect } from "react";

import { Modal, Button, Form } from "react-bootstrap";

const DeleteCategory = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [categories, setCategories] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const bool = false;

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
    await fetch(`http://localhost:8080/category/instock/${categoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
      body: JSON.stringify(false),
    })
      .then((response) => {
        console.log(response.status);
        if (response.status === 401) {
          console.log("REDIRECT USER TO LOG IN");
          return;
        }
        if (response.status != 200) {
          setValidated(false);
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
        if (data === "Updated successfully") {
          handleCategories();
        }
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
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete a Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={submit}>
            <Form.Group controlId="formSelectCategory">
              <Form.Label>Select Category to Delete</Form.Label>
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
                Delete
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteCategory;
