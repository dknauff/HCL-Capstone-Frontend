import { useState } from "react";

import { Modal, Button, Form } from "react-bootstrap";

const UpdateCategory = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [validated, setValidated] = useState(false);

  const bool = false;

  const submit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    await fetch(
      `https://capstone-backend-spring.herokuapp.com/category/${categoryId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          categoryId,
          categoryName,
        }),
      }
    )
      .then((response) => {
        if (response.status != 200) {
          setValidated(false);
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const handleCategories = async () => {
    fetch("https://capstone-backend-spring.herokuapp.com/category/instock", {
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
        Update
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={submit}>
            <Form.Group controlId="formSelectCategory">
              <Form.Label>Select Category to Update</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {categories.map((cat) => (
                  <option value={cat.categoryId}>{cat.categoryName}</option>
                ))}
              </Form.Control>
            </Form.Group>
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
                Update
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateCategory;
