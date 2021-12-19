const jwt = require("jsonwebtoken");

/**
 *
 * @param {*} responseAfterSavingUser it is the user that we want to register.
 */
const jwtSignUpUser = async (responseAfterSavingUser) => {
   return jwt.sign(
      responseAfterSavingUser,
      process.env.SECRET_KEY,
      { expiresIn: 1800 } //expires in 30min
   );
};

/**
 *
 * @param {*} responseAfterLogin it is the user that we want to login.
 */
const jwtSignInUser = async (responseAfterLogin) => {
   return jwt.sign(
      responseAfterLogin,
      process.env.SECRET_KEY,
      { expiresIn: 1800 } //expires in 30min
   );
};

module.exports = {
   jwtSignUpUser,
   jwtSignInUser,
};
