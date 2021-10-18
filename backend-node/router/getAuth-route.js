const express = require("express");
const router = express.Router();
const app = express();

router.get("/api/login", (req, res) => {
   res.status(200).json({ message: "login successfull" });
});

module.exports = router;
