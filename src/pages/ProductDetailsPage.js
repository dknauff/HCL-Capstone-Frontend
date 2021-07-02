import { Card } from "react-bootstrap";

import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { Button } from "react-bootstrap";

const ProductDetailsPage = () => {
  const id = useLocation().state.id;

  // get product by id
  const [loadedProduct, setLoadedProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8080/product/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const product = data;
        console.log(product);

        setIsLoading(false);
        setLoadedProduct(product);

        setCategory(product.category.categoryName);
      });
  }, []);

  const addToCart = async () => {
    await fetch(`http://localhost:8080/cart/add/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
      body: JSON.stringify(1),
    });
  };

  if (isLoading) {
    return (
      <section>
        <p>loading...</p>
      </section>
    );
  }

  return (
    <div>
      <center>
        <Card style={{ width: "50rem", textAlign: "left" }}>
          <Card.Img
            variant="top"
            src={loadedProduct.imageUrl}
            width="400"
            height="500"
          />
          <Card.Body>
            <center>
              <Card.Title>{loadedProduct.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {category}
              </Card.Subtitle>
            </center>
            <Card.Text>{loadedProduct.description}</Card.Text>
            <center>
              <Button
                className="btn btn-primary"
                onClick={addToCart}
                href="/cart"
              >
                Add to Cart
              </Button>
            </center>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
};

export default ProductDetailsPage;
