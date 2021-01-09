const User = require("../models/signupSchema");

//custom imports
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

const loginUser = async (req, res, next) => {
  console.log("Current User", req.currentUser);
  try {
    let result = await bcrypt.compare(
      req.body.userPassword,
      req.currentUser.userPassword
    );
    if (!result) {
      return sendErrorMessage(
        new AppError(401, "Unsuccessful", "Password is incorrect"),
        req,
        res
      );
    }
    let jwtToken = await generateToken(
      { emailId: req.currentUser.emailId },
      process.env.JWT_SECRET
    );
    console.log("Token", jwtToken);
    res.cookie("jwt", jwtToken);
    res.status(200).json({
      status: "Successful login",
      data: [
        {
          jwt: jwtToken,
        },
      ],
    });
  } catch (err) {
    return sendErrorMessage(
      new AppError(500, "Unsuccessful", "internal error"),
      req,
      res
    );
  }
};

// const loginUser = async (req, res, next) => {
//   console.log("Current User", req.currentUser);
//   try {
//     let result = await bcrypt.compare(
//       req.body.password,
//       req.currentUser.password
//     );
//     console.log("result", result);
//     if (!result) {
//       return sendErrorMessage(
//         new AppError(401, "Unsuccessful", "Password is incorrect"),
//         req,
//         res
//       );
//     } else {
//       //   let data = await User.create(newUser);
//       sendResponse(200, "User loggedIn Succesfully", data, req, res);
//     }
//   } catch (err) {
//     return sendErrorMessage(
//       new AppError(400, "unsuccessful", "Internal Error"),
//       req,
//       res
//     );
//   }
// };

module.exports.loginUser = loginUser;
