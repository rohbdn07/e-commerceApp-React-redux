const Joi = require("joi");
const mongoose = require("mongoose");

const UserAuthSchema = new mongoose.Schema({
   userName: {
      type: String,
      required: true,
      minLength: 3,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
      minLength: 3,
   },
});

const User = mongoose.model("User", UserAuthSchema);

const validateUser = (user) => {
   const schema = {
      userName: Joi.string().min(3).max(10).required(),
      email: Joi.string().min(5).max(25).required().email(),
      password: Joi.string().min(6).max(255).required(),
   };

   return Joi.validate(user, schema);
};

exports.User = User;
exports.validate = validateUser;
