const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../database/models/user/user.auth");
const router = express.Router();
const app = express();

/**
 * /api/register: register route
 * @param req username,email,password
 * @param res sending message, token as a response to client side
 */

router.post("/api/register", async (req, res) => {
   try {
      const userExist = await User.findOne({ email: req.body.email });
      if (userExist) {
         return res
            .status(200)
            .json({ message: "User with this email already existed!" });
      } else {
         const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
         });

         //bcrypt the password into hash-password.
         const saltRound = 10;
         bcrypt.genSalt(saltRound, (error, salt) => {
            bcrypt.hash(newUser.password, salt, (error, hash) => {
               if (error) throw error;
               newUser.password = hash;
               newUser.save().then((user) => {
                  const payload = {
                     id: user.id,
                     email: user.email,
                  };

                  //JWT Auth to generate 'Token'.
                  jwt.sign(
                     payload,
                     process.env.SECRET_KEY,
                     { expiresIn: 3600 },
                     (err, token) => {
                        res.json({
                           success: true,
                           token: "Bearer " + token,
                           message: "User has been created!!",
                        });
                     }
                  );
               });
            });
         });
      }
   } catch (error) {
      console.log("Unable to register! Failed to register!!!", error);
      res.status(400).json({
         success: false,
         message: "Register unsuccessful, please try with valid creadintials",
      });
   }
});

/**
 * /api/login: login route
 * @param req email,password
 * @param res token and message
 */

router.post("/api/login", async (req, res) => {
   const { email, password } = req.body;
   const existUser = await User.findOne({ email });
   if (!existUser) {
      return res.status(404).json({ message: "This user doesn't exit!" });
   }
   bcrypt.compare(password, existUser.password).then((isMatch) => {
      if (isMatch) {
         const payload = {
            id: existUser.id,
            email: existUser.email,
         };

         jwt.sign(
            payload,
            process.env.SECRET_KEY,
            { expiresIn: 3600 }, //expires in 1hr
            (error, token) => {
               res.json({
                  success: true,
                  token: "Bearer " + token,
               });
            }
         );
      } else {
         res.status(400).json({ message: "Email or password is incorrect!!" });
      }
   });
});

module.exports = router;
