const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: validator.isEmail, // Validator.js to check if the email is valid
      message: "Please enter a valid email address",
    },
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Date of Birth is required"],
  },
});

module.exports = mongoose.model("User", userSchema);
