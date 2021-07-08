import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { Navbar, Nav } from "react-bootstrap";

import { useState, useEffect } from "react";

// Get Category by id

const NavBar = () => {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    fetch("https://capstone-backend-spring.herokuapp.com/cart", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          (sessionStorage.getItem("jwt") ? sessionStorage.getItem("jwt") : ""),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // setCartItems
        setCartItems(data.numCartItems);
      });
  });

  return (
    <div>
      <Navbar bg="light" expand="lg" style={{ marginBottom: "40px" }}>
        <Navbar.Brand>
          <Link to="/" className="nav-link">
            Hi-5 Music Shop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/products" className="nav-link">
              Products
            </Link>
          </Nav>

          <br />
          <Link
            to="/cart"
            className="btn btn-danger"
            style={{ float: "left" }}
            id="cart-button"
          >
            <span id="cartItemCount">{cartItems} </span>
            <AiOutlineShoppingCart />
          </Link>
          <Nav.Link>
            <Link to="/logout">Logout</Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
