const express = require("express");
const router = express.Router();
const app = express();
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//GET: route(/) to get all the data from db.
router.get("/", (req, res) => {
  // console.log("the comming from frontend", req.body);
  res.json('here is it');
});
// router.get("/api/checkout/success", (req, res) => {
//   console.log("the comming from frontend");
//   res.json("hello");
// });

// const calculateOrderAmount = items => {

//   return items.price
// };

router.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { dataFromClient } = req.body;
    if (!dataFromClient) {
      return res
        .status(400)
        .json({ error: "missing required session parameter" });
    }

    const getProductData = dataFromClient.map((item) => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.qty,
      }
    })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: getProductData,
      shipping_address_collection: {
        allowed_countries: ["FI", "CA"],
      },
      mode: "payment",
      success_url: `${process.env.SERVER_URL}/success?session_id={CHECKOUT_SESSION_ID}`, //`${DomainUrl}/success?session_id={CHECKOUT_SESSION_ID}`
      cancel_url: `${process.env.SERVER_URL}/cancelled=true`, //`${DomainUrl}/cancelled=true`
    })
    res.status(200).json({ url: session.url });
  } catch (error) {
    console.log("there is an error connection to Stripe", error);
    res.status(400).json({ error: "unable to submit payment to stripe" });
  }
});

module.exports = router;
