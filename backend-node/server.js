require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const app = express();
const getPaymentRoute = require('./router/getPayment-route');


//listing to LocalHost
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
console.log("  Press CTRL-C to stop\n");

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// enable cors
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

//get data from route end-point
app.use(getPaymentRoute);

// The `res.redirect()` function sends back an HTTP 302 by default.
// When an HTTP client receives a response with status 302, it will send
// an HTTP request to the URL in the response, in this case `/`
router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = app;