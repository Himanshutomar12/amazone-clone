import React from "react";
import { useStateValue } from "../../StateProvider";

function Card(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        value: props.value,
        rating: props.rating,
        image: props.image,
      },
    });
  };
  return (
    <div className="card">
      <div className="product_info">
        <p>{props.title}</p>
      </div>
      <div className="product_price">
        <small>$</small>
        <strong>{props.value}</strong>
      </div>
      <div className="product_rating">
        {Array(props.rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <div className="product_image">
        <img className="product_image" src={props.image} alt="" />
      </div>
      <div className="product_button">
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Card;
