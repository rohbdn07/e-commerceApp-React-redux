const express = require("express");
const router = express.Router();
const app = express();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//GET: route(/) to get all the data from db.
router.get("/", (req, res) => {
    res.send("hi from server");
});

router.post("/create-checkout-session", async(req, res) => {
    try {
        const session = await stripe.checkout.session.create({
            payment_method_types: ["card"],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: req.body.map((item) => {
                        return {
                            name: item.productName,
                            unit_amount: item.Totalprice * 1000,
                        }
                    }),
                    unit_amount: 2000,
                },
                quantity: 1,
            }, ],
            mode: "payment",
            succss_url: "http://localhost:4242/success.html",
            cancel_url: "http://localhost:4242/cancel.html",
        });
    } catch (error) {
        console.log('there is an error connection to Stripe', error)
    }
});

module.exports = router;