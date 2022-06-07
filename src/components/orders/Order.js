import React from "react";
import "./order.css";
import moment from "moment";
import CheckoutProduct from "../../checkout/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  var sum = 0;
  for (let i = 0; i < order.data.basket.length; i++) {
    const element = (sum += order.data.basket[i].value);
  }
  return (
    <div className="order">
      <div className="order_top">
        <div className="order_top1">
          <h4 className="order_header">Order</h4>
          <p className="order_date">
            {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
          </p>
        </div>
        <div className="order_top2">
          <p className="order_id">
            <small>{order.id}</small>
          </p>
        </div>
      </div>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          value={item.value}
          rating={item.rating}
          image={item.image}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <p className="order_total">Order total: {value}</p>
        )}
        decimalScale={2}
        value={sum}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" $"}
      />
    </div>
  );
}

export default Order;
