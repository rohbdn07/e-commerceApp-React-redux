/**
 *
 * @param req it contains data coming from client server.
 * @param res send res data to client server.
 */
const paymentController = async (req, res) => {
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
               currency: "usd",
               product_data: {
                  name: item.title,
                  images: [item.image],
               },
               unit_amount: item.price * 100,
            },
            quantity: item.qty,
         };
      });

      const coupon = await process.env.STRIPE_SECRET_KEY.coupons.create({
         percent_off: 10,
         duration: "once",
         currency: "usd",
      });

      const session =
         await process.env.STRIPE_SECRET_KEY.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: getProductData,
            shipping_address_collection: {
               allowed_countries: ["FI", "CA"],
            },
            mode: "payment",
            discounts: [
               {
                  coupon: coupon.id,
               },
            ],
            success_url: `${process.env.SERVER_URL}/success?session_id={CHECKOUT_SESSION_ID}`, //`${DomainUrl}/success?session_id={CHECKOUT_SESSION_ID}`
            cancel_url: `${process.env.SERVER_URL}/cancelled`, //`${DomainUrl}/cancelled=true`
         });

      res.status(200).json({
         url: session.url,
         session: session,
         coupon: coupon,
      });
   } catch (error) {
      console.log("there is an error connection to Stripe", error);
      res.status(400).json({ error: "unable to submit payment to stripe" });
   }
};

module.exports = {
   paymentController,
};
