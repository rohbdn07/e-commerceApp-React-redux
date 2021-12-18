const express = require("express");
const {
   paymentController,
} = require("../controllers/payment/payment-controller");
const { verifyToken } = require("../middleware/auth/token/auth.token");
const router = express.Router();
const app = express();

/**
 * POST: route(/api/create-checkout-session) to post product(s) data to stripe (payment gateway).
 * @param route /api/create-checkout-session, is the route to post product(s) data to stripe (payment gateway).
 * @param varifyToken verify token and return the decoded token.
 * @param paymentController it contains data coming from client server.
 * @returns res.
 */
router.post("/api/create-checkout-session", verifyToken, paymentController);

module.exports = router;
