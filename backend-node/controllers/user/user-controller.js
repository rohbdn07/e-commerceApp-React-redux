const { User } = require("../../database/models/user/user.auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
};

const login = async (req, res) => {
   const existUser = await User.findOne({ email: req.body.email });
   console.log(existUser);
   if (!existUser) {
      return res.json({ message: "This user doesn't exit!" });
   } else {
      try {
         //compare new password with already existed password
         bcrypt
            .compare(req.body.password, existUser.password)
            .then((isMatch) => {
               if (isMatch) {
                  console.log("the password matched");
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
                        });
                     }
                  );
               } else if (!isMatch) {
                  console.log("the password not matched");
                  res.json({
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