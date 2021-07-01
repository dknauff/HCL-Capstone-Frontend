import { Link } from "react-router-dom";

import { Card, Col } from "react-bootstrap";

const ProductCard = (props) => {
  return (
    <Col xs={4}>
      <div style={{ textAlign: "center" }}>
        <Link to="#" className="card-link">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text style={{ color: "black" }}>
                {props.description}
              </Card.Text>
              <Card.Text style={{ color: "black" }}>$ {props.price}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </Col>
  );
};

export default ProductCard;
