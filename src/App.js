import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainPageJumbo from "./components/MainPageJumbo";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import PaymentPage from "./pages/PaymentPage";
import ProductCard from "./components/ProductCard";
import AllProductsPage from "./pages/AllProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AdminPage from "./pages/AdminPage";

import { useState, useEffect } from "react";

function App() {
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [validLogin, setValidLogin] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const constantMock = window.fetch;
  window.fetch = function () {
    return new Promise((resolve, reject) => {
      constantMock
        .apply(this, arguments)
        .then((response) => {
          if (
            response.clone().status === 401 ||
            response.clone().status === 403
          ) {
            console.log(response.clone().status);
            console.log("intercepted");
            reject(response);
          }
          if (response.clone()[0] == "http://localhost:8080/users/register") {
            resolve(response);
          }
          if (validLogin === false) {
            setValidLogin(true);
          }
          resolve(response);
        })
        .catch((e) => {
          console.log("rejected");
          sessionStorage.removeItem("jwt");
          setRoles([""]);
          setValidLogin(false);
          setRedirect(true);
        });
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/users/role", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          (sessionStorage.getItem("jwt") ? sessionStorage.getItem("jwt") : ""),
      },
    })
      .then((response) => {
        console.log("RESPONSE");
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setRoles(data);
      });
  }, []);

  return (
    <div>
      <Router>
        <Route path="/">{validLogin && <NavBar />}</Route>
        <Route path="/" exact>
          <MainPageJumbo />
        </Route>
        <Route path="/users/register">
          <RegisterPage />
        </Route>
        <Route path="/users/login">
          <LoginPage />
        </Route>
        {validLogin && (
            <Route path="/payment">
              <PaymentPage />
            </Route>
          ) && (
            <Route path="/logout">
              <LogoutPage />
            </Route>
          ) && (
            <Route path="/product/products" exact>
              <AllProductsPage />
            </Route>
          ) && (
            <Route path="/productpage/">
              <ProductDetailsPage />
            </Route>
          )}
        {validLogin && roles.includes("ROLE_ADMIN") && (
          <Route path="/adminpage">
            <AdminPage />
          </Route>
        )}
        <Route path="/">
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
