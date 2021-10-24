const express = require("express");
const router = express.Router();
const app = express();

router.post("/api/login", (req, res) => {
   const { username, email, password } = req.body;
   res.status(200).json({ message: "login successfull" });
});

module.exports = router;
