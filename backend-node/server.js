// By setting environment variables according to stages (dev,prod) in this entry file.
// you'll get the process.env variables anywhere in this backend server.
if (process.env.NODE_ENV !== "production") {
   require("dotenv").config({
      path: "./config/keyDev.env",
   });
}

// else if (process.env.NODE_ENV === "production") {
//    require("dotenv").config({ path: "./config/keyProd.env" });
// }

const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const app = express();

const getPaymentRoute = require("./router/getPayment-route");
const getAuthRoute = require("./router/getAuth-route");

//Serve static assists if in PRODUCTION
if (process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, "../frontend", "build")));
   app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
   });
}

//Connection to MONGODB database
const mongoose = require("mongoose");
mongoose
   .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
   .then(() => console.log("Connected to MongoDB..."))
   .catch((err) => console.error("Could not connect to MongoDB..."));

//listing to LocalHost
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
console.log("  Press CTRL-C to stop\n");

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());

//get data from route end-point
app.use(getPaymentRoute);

//Post Auth request and response
app.use(getAuthRoute);

// The `res.redirect()` function sends back an HTTP 302 by default.
// When an HTTP client receives a response with status 302, it will send
// an HTTP request to the URL in the response, in this case `/`
router.get("*", (req, res) => {
   res.redirect("/");
});

module.exports = app;
