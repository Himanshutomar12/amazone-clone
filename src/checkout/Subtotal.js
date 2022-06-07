import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./subtotal.css";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong> {value}</strong>
            </p>
            <small className="subtotal_gift">
              <input className="subtotal_checkbox" type="checkbox" />
              <span>This order contains a gift.</span>
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" $"}
      />
      <div className="subtotal_button">
        <button onClick={() => navigate("/payment")}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Subtotal;
