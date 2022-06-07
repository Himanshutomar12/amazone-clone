import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
import Checkout from "./checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Payment from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/Orders";

const promise = loadStripe(
  "pk_test_51KUTdZSIgTf4QR1Alwb4GcvGWr0XZV834JZdl1yn8A2T0bSbFHW8tQsQox55Uh19gylFK6fZpNi059SDcNMDlPLy00SmxZdopF"
);
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="sectionOne">
                  <Home />
                </div>
                <div className="sectionTwo">
                  <Product />
                </div>
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          {/* Orders */}

          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />

          {/* payment */}
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
