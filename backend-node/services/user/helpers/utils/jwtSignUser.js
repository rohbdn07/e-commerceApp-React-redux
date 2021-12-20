const jwt = require("jsonwebtoken");

/**
 *
 * @param {JwtPayload} loggedInUser it is the user that we want to login.
 */
const jwtSignInUser = async (loggedInUser) => {
   //generate the jwt token and return it.
   return jwt.sign(
      loggedInUser,
      process.env.SECRET_KEY,
      { expiresIn: 1800 } //expires in 30min
   );
};

module.exports = {
   jwtSignInUser,
};
