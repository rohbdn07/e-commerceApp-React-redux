// const devKeys = require("../config/keyDev.env");
// const prodKeys = require("../config/keyProd.env");

const express = require("express");
const {
   paymentController,
} = require("../controllers/payment/payment-controller");
const router = express.Router();
const app = express();

/**
 * POST: route(/api/create-checkout-session) to post product(s) data to stripe.
 */
router.post("/api/create-checkout-session", paymentController);

module.exports = router;
