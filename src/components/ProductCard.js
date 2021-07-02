import { Link } from "react-router-dom";

import { Card, Col, Button } from "react-bootstrap";

const ProductCard = (props) => {
  const id = props.id;

  const removeOneProduct = async () => {
    await fetch(`http://localhost:8080/cart/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
      body: JSON.stringify(1),
    });
  };

  return (
    <Col xs={4}>
      <div style={{ textAlign: "center" }}>
        <Card
          style={{ width: "18rem", marginTop: "20px", marginBotton: "20px" }}
        >
          <Link
            to={{ pathname: "/productpage", state: { id: props.id } }}
            className="card-link"
          >
            <Card.Img
              variant="top"
              src={props.imageUrl}
              height="180"
              width="320px"
            />
          </Link>
          <Card.Body>
            <Link
              to={{ pathname: "/productpage", state: { id: props.id } }}
              className="card-link"
            >
              <Card.Title>{props.name}</Card.Title>
            </Link>
            <Card.Text style={{ color: "black" }}>
              {props.description}
            </Card.Text>
            <Card.Text style={{ color: "black" }}>$ {props.price}</Card.Text>
            {props.quantity && (
              <Card.Text style={{ color: "black" }}>
                Quantity: {props.quantity}
                <Button
                  onClick={removeOneProduct}
                  variant="danger"
                  size="sm"
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  -
                </Button>
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </div>
    </Col>
  );
};

export default ProductCard;
