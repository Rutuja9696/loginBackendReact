const User = require("../models/signupSchema");

//custom imports
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

const signupUser = async (req, res, next) => {
  try {
    let data = req.body;
    console.log(data);
    let newUser = {};
    newUser.name = data.name.trim();
    newUser.email = data.email.trim();
    newUser.password = data.password.trim();

    let user = await User.find({ email: newUser.email });
    if (user.length) {
      return sendErrorMessage(
        new AppError(
          400,
          "Unsuccessful",
          "Email already exist try with another Email id"
        ),
        req,
        res
      );
    } else {
      let data = await User.create(newUser);
      sendResponse(200, "User added Succesfully", data, req, res);
    }
  } catch (err) {
    return sendErrorMessage(new AppError(400, "unsuccessful", err), req, res);
  }
};
module.exports.signupUser = signupUser;
