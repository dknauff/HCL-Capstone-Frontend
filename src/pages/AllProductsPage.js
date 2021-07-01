import ProductList from "../components/ProductList";

import { useState, useEffect } from "react";

sessionStorage.getItem("jwt");

const AllProductsPage = () => {
  // get all products
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/product/instock", {
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

          products.push(product);
        }

        setIsLoading(false);
        setLoadedProducts(products);
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
        <h1>All Available Products</h1>
      </center>
      <ProductList products={loadedProducts} />
    </div>
  );
};

export default AllProductsPage;
