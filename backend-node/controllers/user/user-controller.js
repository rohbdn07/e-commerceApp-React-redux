const { User } = require("../../database/models/user/user.auth");
const validator = require("validator");
const validateRegisterInput = require("../../middleware/auth/validateRegisterInput");
const {
   bcryptThePasswordAndSaveUser,
   comparePassword,
} = require("./utils/bcrypt");
const { jwtSignInUser, jwtSignUpUser } = require("./utils/jwtSignUser");

/**
 * @param req it contains user's credentials.
 * @param res send response: jwt token, message, success to client server.
 */
const register = async (req, res) => {
   try {
      const { errors, isValid } = validateRegisterInput(req.body);

      if (errors.email) {
         return res.json({
            success: false,
            message: errors.email, //return error message
         });
      }

      if (errors.password) {
         return res.json({
            success: false,
            message: errors.password, //return error message
         });
      }

      //check if the email is already exist in database.
      const userExist = await User.findOne({ email: req.body.email });

      if (userExist) {
         return res
            .status(200)
            .json({ message: "User with this email is already existed!" });
      } else {
         //if user doesn't exist, then create the user.
         const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
         });

         //bcrypt the password into hash-password.
         //then save the user into database.
         //then send response to client server with JWT token.
         const userIsSaved = await bcryptThePasswordAndSaveUser(newUser);

         if (userIsSaved) {
            const payload = {
               id: userIsSaved._id,
               email: userIsSaved.email,
            };

            const token = await jwtSignUpUser(payload); //generate the token.

            if (token && token.length > 0) {
               return res.json({
                  success: true,
                  token: "Bearer " + token,
                  message: "User has been created. Please Login now!",
               });
            } else {
               return res.json({
                  success: false,
                  message: "Something went wrong. Please try again!",
               });
            }
         }
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
   try {
      //check if the email is already exist in database.
      const existUser = await User.findOne({ email: req.body.email });

      if (!existUser) {
         return res.json({ message: "This user doesn't exit!" });
      }

      const passwordInputByUser = req.body.password;

      //compare the password input by user with the password in database.
      //if the password input by user is correct,
      //then send response to client server with JWT token.
      const isPasswordMatch = await comparePassword(
         existUser,
         passwordInputByUser
      );

      if (!isPasswordMatch) {
         return res.json({
            message: "Email or Password is incorrect!!",
            error: "Email or password is incorrect!!",
         });
      } else {
         //if password matched, then generate the token.
         //and send the token and username to user.
         const userName = existUser.userName;
         const existUserEmail = existUser.email;

         const payload = {
            id: existUser._id,
            email: existUserEmail,
            userName,
         };

         const token = await jwtSignInUser(payload); //generate the token.
         if (token && token.length > 0) {
            res.json({
               success: true,
               token: "Bearer " + token,
               message: "You're loggedIn",
               userName,
            });
         } else {
            res.json({
               message:
                  "Login unsuccessful, please try with valid creadintials",
            });
         }
      }
   } catch (error) {
      console.log("Error while login user", error);
   }
};

module.exports = {
   register,
   login,
};
