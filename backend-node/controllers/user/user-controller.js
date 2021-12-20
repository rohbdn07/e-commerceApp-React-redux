const UserAuthService = require("../../services/user/auth.user.service");
const validateRegisterInput = require("../../middleware/auth/validateRegisterInput");

/**
 * @param req it contains user's credentials received from client.
 * @param res send response object.
 * @returns response {success, message} to client server.
 */
const register = async (req, res) => {
   try {
      const { errors, isValid } = validateRegisterInput(req.body);

      // return error message if email is not valid.
      if (errors.email) {
         return res.json({
            success: false,
            message: errors.email,
         });
      }

      // return error message if password is not valid.
      if (errors.password) {
         return res.json({
            success: false,
            message: errors.password,
         });
      }

      //check if the email is already existed in database through UserAuthService.
      const userExist = await UserAuthService.checkIfUserExist(req.body.email);

      // return error message if the email is already existed in database.
      if (userExist) {
         return res.status(200).json({
            success: false,
            message: "User with this email is already exists!",
         });
      } else {
         const { userName, email, password } = req.body; //get user's credentials.

         // register the user into database through UserAuthService.
         const registeredUser = await UserAuthService.register(
            userName,
            email,
            password
         );

         res.json(registeredUser); //send response to client server.
      }
   } catch (error) {
      console.log("Unable to register! Failed to register!!!", error);

      // return error message if above code fails.
      res.status(400).json({
         success: false,
         message: "Register unsuccessful, please try with valid creadintials",
      });
   }
};

/**
 * @param req it contains user's credentials received from client.
 * @param res send response object.
 * @returns response {success, message, username} to client server.
 */
const login = async (req, res) => {
   try {
      //check if the email is already existed in database through UserAuthService.
      const userExist = await UserAuthService.checkIfUserExist(req.body.email);

      if (!userExist) {
         return res.json({ message: "This user doesn't exit!" });
      }

      // login the user through UserAuthService.
      const loggedIn = await UserAuthService.login(
         req.body.email,
         req.body.password
      );

      res.status(200).json(loggedIn); //send response to client server.
   } catch (error) {
      console.log("Error while login user", error);
      res.json({
         success: false,
         message: "Login unsuccessful, please try with valid creadintials",
      });
   }
};

module.exports = {
   register,
   login,
};
