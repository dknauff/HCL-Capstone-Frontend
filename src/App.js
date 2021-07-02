import { BrowserRouter as Router, Route } from "react-router-dom";

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
import OrderedPage from "./pages/OrderedPage";

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
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/payment">
          <PaymentPage />
        </Route>
        <Route path="/logout">
          <LogoutPage />
        </Route>
        <Route path="/products" exact>
          <AllProductsPage />
        </Route>
        <Route path="/productpage/">
          <ProductDetailsPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/purchase">
          <OrderedPage />
        </Route>
        <Route path="/">
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
