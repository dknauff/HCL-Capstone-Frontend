import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainPageJumbo from "./components/MainPageJumbo";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import PaymentPage from "./pages/PaymentPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  const [user, setUser] = useState([]);

  const registerUser = async (createdUser) => {
    const res = await fetch("http://localhost:9001/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(createdUser),
    });
    const data = await res.json();

    setUser([data]);
  };

  return (
    <div>
      <Router>
        <Route path="/">
          <NavBar />
        </Route>
        <Route path="/" exact>
          <MainPageJumbo />
        </Route>
        <Route path="/users/register">
          <RegisterPage onRegister={registerUser} />
        </Route>
        <Route path="/users/login">
          <LoginPage />
        </Route>
        <Route path="/users/payment">
          <PaymentPage />
        </Route>
        <Route path="/users/products">
          <ProductsPage />
        </Route>
        <Route path="/users/logout">
          <LogoutPage />
        </Route>
        <Route path="/">
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
