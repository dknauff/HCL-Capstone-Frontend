import ProductList from "../components/ProductList";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

sessionStorage.getItem("jwt");

const CartPage = () => {
  // get all products in cart
  const [cartProducts, setCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    console.log("HELLO " + sessionStorage.getItem("jwt"));
    fetch("http://localhost:8080/cart/items", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = [];

        for (const key in data) {
          const product = {
            id: key,
            ...data[key],
          };

          product.product.quantity = product.itemQty;

          products.push(product.product);
        }

        setIsLoading(false);
        setCartProducts(products);
      });
  }, []);

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
        <h1>Cart</h1>
        <Link to="/payment" className="btn btn-success">
          Purchase
        </Link>
      </center>
      <ProductList products={cartProducts} />
    </div>
  );
};

export default CartPage;
