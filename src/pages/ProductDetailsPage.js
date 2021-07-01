import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";

const ProductDetailsPage = () => {
  return (
    <div>
      <center>
        <Card style={{ width: "50rem", textAlign: "left" }}>
          <Card.Body>
            <Card.Title>Product Name</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Category</Card.Subtitle>
            <Card.Text>Description of the product goes here.</Card.Text>
            <Link className="btn btn-primary" to="#">
              Add to Cart
            </Link>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
};

export default ProductDetailsPage;
