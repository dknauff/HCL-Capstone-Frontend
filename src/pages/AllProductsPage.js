import ProductList from "../components/ProductList";

import { useState, useEffect } from "react";

import { Dropdown, Form, Button } from "react-bootstrap";

import { AiOutlineSearch } from "react-icons/ai";

sessionStorage.getItem("jwt");

const AllProductsPage = () => {
  // get all products
  const [loadedProducts, setLoadedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCategories, setLoadedCategories] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [query, setQuery] = useState("");

  // get all products in stock
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
        setDisplayedProducts(products);
      });

    fetch("http://localhost:8080/category/instock", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("jwt"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const categories = [];

        for (const key in data) {
          const category = {
            id: key,
            ...data[key],
          };

          categories.push(category);
        }

        setLoadedCategories(categories);
      });
  }, []);

  const sortCategory = (chosenCategoryId) => {
    setDisplayedProducts(
      loadedProducts.filter(
        (product) => product.category.categoryId == chosenCategoryId
      )
    );
  };

  const sortByQuery = (e) => {
    e.preventDefault();

    setDisplayedProducts(
      loadedProducts.filter((product) => product.name.includes(query))
    );
  };

  const resetCategories = () => {
    setDisplayedProducts(loadedProducts);
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
        <h1>All Available Products</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <Form inline onSubmit={sortByQuery}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="btn btn-success"
              style={{ marginLeft: "15px" }}
              type="submit"
            >
              <AiOutlineSearch />
            </Button>
          </Form>
        </div>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Shop by Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={resetCategories}>
              All Categories
            </Dropdown.Item>
            {loadedCategories.map((category) => (
              <Dropdown.Item
                onClick={() => {
                  sortCategory(category.categoryId);
                }}
              >
                {category.categoryName}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </center>
      <ProductList products={displayedProducts} />
    </div>
  );
};

export default AllProductsPage;
