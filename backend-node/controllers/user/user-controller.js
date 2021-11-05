const { User } = require("../../database/models/user/user.auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @param req it contains user's credentials.
 * @param res send response: jwt token, message, success to client server.
 */

const register = async (req, res) => {
   try {
      const userExist = await User.findOne({ email: req.body.email });
      if (userExist) {
         return res
            .status(200)
            .json({ message: "User with this email is already existed!" });
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
                           message: "User has been created. Please Login now!",
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
};

/**
 * @param req it contains user's login credentials.
 * @param res send response: jwt token, message, success to client server.
 */
const login = async (req, res) => {
   const existUser = await User.findOne({ email: req.body.email });
   if (!existUser) {
      return res.json({ message: "This user doesn't exit!" });
   } else {
      try {
         const userName = existUser.userName;
         //compare new password with already existed password
         bcrypt
            .compare(req.body.password, existUser.password)
            .then((isMatch) => {
               if (isMatch) {
                  const payload = {
                     id: existUser._id,
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
                           userName,
                        });
                     }
                  );
               } else if (!isMatch) {
                  res.json({
                     success: false,
                     message: "Email or password is incorrect!!",
                  });
               }
            });
      } catch (error) {
         console.log("Error while login user", error);
      }
   }
};

module.exports = {
   register,
   login,
};
