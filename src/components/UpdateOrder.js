import { useState, useEffect } from "react";

import { Modal, Button, Form } from "react-bootstrap";

const UpdateOrder = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update
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
          {/* <Form noValidate validated={validated} onSubmit={submit}>
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
          </Form> */}
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

export default UpdateOrder;
