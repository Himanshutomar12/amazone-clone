import React from "react";
import { useStateValue } from "../StateProvider";
import "./checkoutProduct.css";

function CheckoutProduct({
  index,
  id,
  title,
  image,
  value,
  rating,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        key: index,
        id: id,
        title: title,
        image: image,
        value: value,
        rating: rating,
      },
    });
  };

  return (
    <div className="checkout_product">
      <div className="checkoutProduct_left">
        <img className="checkoutProduct_image" src={image} alt="" />
      </div>
      <div className="checkoutProduct_right">
        <p className="checkoutProduct_title">{title}</p>
        <div className="checkoutProduct_price">
          <small>$</small>
          <strong>{value}</strong>
        </div>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <div className="checkoutProduct_button">
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from basket</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
