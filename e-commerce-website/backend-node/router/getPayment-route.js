const express = require("express");
const router = express.Router();
const app = express();
require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//GET: route(/) to get all the data from db.
// router.posts("/api/checkout", (req, res) => {
//   console.log("the comming from frontend", req.body);
//   res.json(JSON.stringify(req.body));
// });
// router.get("/api/checkout/success", (req, res) => {
//   console.log("the comming from frontend");
//   res.json("hello");
// });

router.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { productItems } = req.body;
    if (!productItems) {
      return res
        .status(400)
        .json({ error: "missing required session parameter" });
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items:
      productItems.map((item) => {
        return {
          quantity: item.quantity,
          price_data: {
            currency: "usd",
            unit_amount: item.price * 1000,
            product_data: {
              name: item.title,
              description: item.description,
              images: [item.image],
            },
          },
        };
      }),
     
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      mode: "payment",
      success_url: "http://localhost:3000/success", //`${DomainUrl}/success?session_id={CHECKOUT_SESSION_ID}`
      cancel_url: "http://localhost:3000/cancel", //`${DomainUrl}/success?session_id={CHECKOUT_SESSION_ID}`
    });
    res.status(200).json({ sessionID: session.id });
  } catch (error) {
    console.log("there is an error connection to Stripe", error);
    res.status(400).json({ error: "unable to submit payment to stripe" });
  }
});

module.exports = router;
