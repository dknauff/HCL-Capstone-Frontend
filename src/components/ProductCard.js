import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";

const ProductCard = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="#" className="card-link">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Product Category
            </Card.Subtitle>
            <Card.Text style={{ color: "black" }}>
              The description that we give the product will go here, this will
              be what shows up when searching.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
