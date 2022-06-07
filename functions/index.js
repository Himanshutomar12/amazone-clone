const functions = require("firebase-functions");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.SECRET_KEY);
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  res.send("Hello Himanshu");
});

app.post("/payments", async (req, res) => {
  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      payment_method: id,
    });
    const clientSecret = payment.client_secret;
    console.log("PAYMENT>>", payment);
    res.json({
      message: "Payment Successful",
      clientSecret: clientSecret,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Payment Failed",
      success: false,
    });
  }
});

exports.app = functions.https.onRequest(app);
