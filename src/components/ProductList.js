import ProductCard from "./ProductCard";

import { Container, Row } from "react-bootstrap";

const ProductList = (props) => {
  return (
    <ul>
      <Container>
        <Row>
          {props.products.map((product) => (
            <ProductCard
              key={product.productId}
              id={product.productId}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              quantity={product.quantity}
            />
          ))}
        </Row>
      </Container>
    </ul>
  );
};

export default ProductList;
