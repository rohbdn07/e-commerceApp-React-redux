const bcrypt = require("bcrypt");

/**
 *
 * @param {*} user it is the user object.
 */
const bcryptThePasswordAndSaveUser = async (user) => {
   const saltRound = 10;
   //bcrypt the password into hash-password before saving into database.
   const hashPassword = await bcrypt
      .hash(user.password, saltRound)
      .catch((err) => {
         console.log(err);
      });
   //hashPassword is the hashed password.
   user.password = hashPassword;
   const savedUser = await user.save(); //save the user into database.
   return savedUser;
};

/**
 *
 * @param {*} passwordInputByUser it is the password input by user.
 * @param {*} existUser it is the existing user object.
 */
const comparePassword = async (existUser, passwordInputByUser) => {
   const existUserPassword = existUser.password;

   //compare new password with already existed password.
   const passwordMatch = await bcrypt.compare(
      passwordInputByUser,
      existUserPassword
   );
   return passwordMatch; //return true or false.
};

module.exports = {
   bcryptThePasswordAndSaveUser,
   comparePassword,
};
