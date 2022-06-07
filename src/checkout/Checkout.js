import React from "react";
import { useAuth } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const currentUser = useAuth();
  const [{ basket }, action] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout_items">
          <h5 style={{ fontStyle: "italic" }}>
            Hello{" "}
            <span>
              {currentUser?.displayName
                ? currentUser?.displayName + ","
                : currentUser?.email}
            </span>
          </h5>
          <h3 className="checkout_title">Your Shopping Basket.</h3>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              value={item.value}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal className="checkout_subtotal" />
      </div>
    </div>
  );
}

export default Checkout;
