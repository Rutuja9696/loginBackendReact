const express = require("express");

const { signupUser } = require("../controllers/signUpUser");
const { loginUser } = require("../controllers/loginUser");

//middlewares
const router = express.Router();
router.route("/signUp").post(signupUser);
router.route("/login").post(loginUser);

//export router
module.exports = router;
