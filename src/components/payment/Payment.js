import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import CheckoutProduct from "../../checkout/CheckoutProduct";
import { db, useAuth } from "../../firebase";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import axios from "axios";
import "./payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { setDoc, doc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";

function Payment() {
  const currentUser = useAuth();
  const [{ basket }, action] = useStateValue();
  const navigate = useNavigate();

  const [processing, setProcessing] = useState();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(e) {
    e.preventDefault();
    setProcessing(true);

    if (currentUser) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (!error) {
        try {
          const { id } = paymentMethod;
          const response = await axios.post(
            "http://localhost:5001/clone-1aab8/us-central1/app/payments",
            {
              amount: getBasketTotal(basket) * 100,
              id,
            }
          );
          /////////////////////////database/////////

          const confirmPayment = await stripe
            .confirmCardPayment(response.data.clientSecret, {
              payment_method_options: { card: CardElement },
            })
            .then(async ({ paymentIntent }) => {
              var ref = doc(
                db,
                "users",
                currentUser?.uid,
                "orders",
                paymentIntent.id
              );

              const docRef = await setDoc(ref, {
                basket: basket,
                created: paymentIntent.created,
              });
            });

          toast.success("Your Order Has Been Placed!😃");

          if (response.data.success) {
            console.log("Successfull Payment", response);
          }
          navigate("/orders");
          console.log(response.data);
          ////////////////////////////////////////////////////
        } catch (error) {
          alert("Something Went Wrong 😢!");
          console.log("Error", error);
        }
      } else {
        alert(error.message);
      }
    } else {
      navigate("/login");
    }
  }

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <ToastContainer />
      <h5 className="payment_total">
        Checkout ({basket.length} items):
        <strong> {getBasketTotal(basket)}</strong>
      </h5>
      <div className="payment_container">
        <div className="payment_left">
          <h5>Delivery Adress</h5>
        </div>
        <div className="first payment_right">
          <p>{currentUser?.email}</p>
          <span>L-1 sangam vihar</span>
          <p>Deoli new delhi</p>
        </div>
      </div>
      <div className="payment_container">
        <div className="payment_left">
          <h5>Review Items and Delivery</h5>
        </div>
        <div className="payment_right">
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
      <div className="payment_container">
        <div className="payment_left">
          <h5>Payment Method</h5>
        </div>
        <div className="payment_right">
          <form className="payment_form" onSubmit={handleSubmit}>
            <div className="payment_priceDetail">
              <CardElement onChange={handleChange} />

              <CurrencyFormat
                renderText={(value) => (
                  <p className="payment_price">Order total: {value}</p>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={" $"}
              />
              <button
                style={{ opacity: disabled === true ? 0.6 : 1 }}
                className="pay"
                disabled={processing || disabled}
              >
                <span>{processing ? <p>Processing</p> : "Pay Now"}</span>
              </button>
            </div>
            {error && <div>{error.message}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
