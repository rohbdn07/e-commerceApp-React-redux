const Validator = require("validator");
const validText = require("./valid.text");

/**
 *
 * @param {*} data it is the user's credentials that we want to validate
 * @returns
 */
module.exports = function validateRegisterInput(data) {
   let errors = {};
   data.userName = validText(data.userName) ? data.userName : "";
   data.email = validText(data.email) ? data.email : "";
   data.password = validText(data.password) ? data.password : "";

   if (!Validator.isLength(data.userName, { min: 2, max: 10 })) {
      errors.userName = "User name must be between 2 and 10 characters";
   }

   if (Validator.isEmpty(data.userName)) {
      errors.displayName = "UserName field is required";
   }

   if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
   }

   if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid. Please enter valid email";
   }

   if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
   }

   if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = "Password must be at least 6 characters";
   }

   return {
      errors,
      isValid: Object.keys(errors).length === 0,
   };
};
