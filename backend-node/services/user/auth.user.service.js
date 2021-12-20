const {
   bcryptThePasswordAndSaveUser,
   comparePassword,
} = require("./helpers/utils/bcrypt");
const { jwtSignInUser } = require("./helpers/utils/jwtSignUser");
const { User } = require("../../database/models/user/user.auth");

/**
 *
 * @param {string} email  email of the user.
 * @returns true if the user exist, false if the user does not exist.
 */
const checkIfUserExist = async (email) => {
   const userExist = await User.findOne({ email: email });
   if (userExist) {
      return true;
   } else {
      return false;
   }
};

/**
 *
 * @param {string} userName user's name.
 * @param {string} email user's email.
 * @param {string} password user's password.
 * @returns {object} Object {success, message} to user-controller.
 */
const register = async (userName, email, password) => {
   // create the new user.
   const newUser = new User({
      userName,
      email,
      password,
   });

   try {
      //bcrypt the password into hash-password.
      //then save the user into database and return response.
      await bcryptThePasswordAndSaveUser(newUser);

      // return the response to user-controller.
      return {
         success: true,
         message: "User has been created. Please Login now!",
      };
   } catch (err) {
      console.error(err.message);
      return {
         success: false,
         message: "Unable to register! Failed to register!!!",
      };
   }
};

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns {object} Object {success, message, token, username} to user-controller.
 */
const login = async (email, password) => {
   try {
      //check if the password is matched with the password in database.
      const user = await User.findOne({ email });
      const passwordMatch = await comparePassword(user, password);

      // return error message if the password is not matched with the password in database.
      if (!passwordMatch) {
         return {
            success: false,
            message: "Email or password is incorrect!",
         };
      } else {
         const payload = {
            id: user.id,
            email: user.email,
         };

         //return the jwt token and user object.
         const jwtToken = await jwtSignInUser(payload);

         // return the jwt token and user object to user-controller.
         if (jwtToken && jwtToken.length > 0) {
            return {
               success: true,
               message: "User has been logged in successfully!",
               token: jwtToken,
               userName: user.userName,
            };
         }
      }
   } catch (err) {
      console.error(err.message);
      return {
         success: false,
         message: "Failed to login!!!",
      };
   }
};

module.exports = {
   checkIfUserExist,
   register,
   login,
};
