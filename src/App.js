import { BrowserRouter as Router, Route } from "react-router-dom";

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


function App() {
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
          <RegisterPage />
        </Route>
        <Route path="/users/login">
          <LoginPage />
        </Route>
        <Route path="/payment">
          <PaymentPage />
        </Route>
        <Route path="/logout">
          <LogoutPage />

        <Route path="/product/products" exact>
          <AllProductsPage />
        </Route>
        <Route path="/productpage/">
          <ProductDetailsPage />

        </Route>
        <Route path="/">
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
