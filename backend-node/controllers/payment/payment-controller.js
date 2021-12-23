const PaymentService = require("../../services/payment/payment.service");

/**
 *
 * @param req it contains data coming from client server.
 * @param res send res data to client server.
 */
const paymentController = async (req, res) => {
   try {
      const { dataFromClient } = req.body;
      // wait payment service to return the response.
      const paymentResponse = await PaymentService.payment(dataFromClient);

      // console.log("paymentResponse", paymentResponse);

      // send the response to client server.
      res.status(200).json(paymentResponse);
   } catch (error) {
      console.log("there is an error connection to Stripe", error);
      res.status(400).json({ error: "unable to submit payment to stripe" });
   }
};

module.exports = {
   paymentController,
};
