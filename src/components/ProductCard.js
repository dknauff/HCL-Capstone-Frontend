import { Link } from "react-router-dom";

import { Card, Col } from "react-bootstrap";

const ProductCard = (props) => {
  return (
    <Col xs={4}>
      <div style={{ textAlign: "center" }}>
        <Link
          to={{ pathname: "/productpage", state: { id: props.id } }}
          className="card-link"
        >
          <Card
            style={{ width: "18rem", marginTop: "20px", marginBotton: "20px" }}
          >
            <Card.Img
              variant="top"
              src={props.imageUrl}
              height="180"
              width="320px"
            />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text style={{ color: "black" }}>
                {props.description}
              </Card.Text>
              <Card.Text style={{ color: "black" }}>$ {props.price}</Card.Text>
              {props.quantity && (
                <Card.Text style={{ color: "black" }}>
                  Quantity: {props.quantity}
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </Link>
      </div>
    </Col>
  );
};

export default ProductCard;
