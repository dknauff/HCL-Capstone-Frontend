import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainPageJumbo from "./components/MainPageJumbo";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import PaymentPage from "./pages/PaymentPage";
import AllProductsPage from "./pages/AllProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AdminPage from "./pages/AdminPage";

import { useState, useEffect } from "react";
import OrderedPage from "./pages/OrderedPage";

function App() {
  const [roles, setRoles] = useState([]);
  const [validLogin, setValidLogin] = useState(
    sessionStorage.getItem("jwt") ? true : false
  );
  const [redirect, setRedirect] = useState(false);
  const [checkRoles, setCheckRoles] = useState(false);

  const constantMock = window.fetch;
  window.fetch = function () {
    return new Promise((resolve, reject) => {
      constantMock
        .apply(this, arguments)
        .then((response) => {
          console.log(response.url);
          if (
            response.clone().url == "http://localhost:8080/users/register" ||
            response.clone().url == "http://localhost:8080/users/auth"
          ) {
            console.log("registering");
            resolve(response);
          } else {
            if (
              response.clone().status === 401 ||
              response.clone().status === 403
            ) {
              console.log(response.clone().status);
              console.log("intercepted");
              setValidLogin(false);
              setRoles([""]);
              setRedirect(true);
              sessionStorage.removeItem("jwt");
              reject("unauth");
            }
            if (validLogin === false && sessionStorage.getItem("jwt")) {
              setValidLogin(true);
            }
            resolve(response);
          }
        })
        .catch((e) => {
          console.log(e);
          if (e === "unauth") {
            setValidLogin(false);
            setCheckRoles(false);
            setRoles([""]);
            setRedirect(true);
          } else {
          }
        });
    });
  };
  useEffect(() => {});
  return (
    <div>
      <Router>
        {validLogin &&
          sessionStorage.getItem("role") &&
          sessionStorage.getItem("role").includes("ROLE_USER") && (
            <Route path="/">
              {" "}
              <NavBar />
            </Route>
          )}
        <Switch>
          <Route path="/" exact>
            <MainPageJumbo />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          {!validLogin && (
            <Route path="/login">
              <LoginPage />
            </Route>
          )}
          {validLogin && (
            <Route path="/payment">
              <PaymentPage />
            </Route>
          )}
          {validLogin && (
            <Route path="/logout">
              <LogoutPage />
            </Route>
          )}
          {validLogin && (
            <Route path="/productpage/">
              <ProductDetailsPage />
            </Route>
          )}
          {validLogin && (
            <Route path="/cart">
              <CartPage />
            </Route>
          )}
          {validLogin && (
            <Route path="/purchase">
              <OrderedPage />
            </Route>
          )}

          {validLogin && (
            <Route path="/products" exact>
              <AllProductsPage />
            </Route>
          )}
          {validLogin && (
            <Route path="/adminpage">
              <AdminPage />
            </Route>
          )}
          <Redirect to="/" />
        </Switch>
        <Route path="/">
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
