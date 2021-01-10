//mongoose schema
const mongoose = require("mongoose");
const uniquid = require("uniquid");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: uniquid(),
  },
  name: {
    type: String,
    required: [true, "Please enter first name"],
    validate: [
      {
        validator: function () {
          return this.name.trim().length;
        },
        message: "Employee's First name should not be empty",
      },
      {
        validator: function () {
          const re = /<("[^"]?"|'[^']?'|[^'">])*>/;
          if (re.test(this.name)) {
            return false;
          }
        },
        message: "Field content cannot be HTML",
      },
    ],
  },
  email: {
    type: String,
    required: [true, "Please enter your email. "],
    unique: [true, "Email Id already exist. Try with another Email Id. "],
    validate: [
      {
        validator: function () {
          return this.email.trim().length;
        },
        message: "Employee's Email should not be empty",
      },
      {
        validator: function () {
          const re = /<("[^"]?"|'[^']?'|[^'">])*>/;
          if (re.test(this.email)) {
            return false;
          }
        },
        message: "Field content cannot be HTML",
      },
      {
        validator: function () {
          const re = /<("[^"]?"|'[^']?'|[^'">])*>/;
          if (re.test(this.email)) {
            return false;
          }
        },
        message: "Email id is not valid",
      },
    ],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
});
let User = mongoose.model("User", userSchema);
module.exports = User;
