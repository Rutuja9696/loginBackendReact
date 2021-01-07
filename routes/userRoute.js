const express = require("express");

const { signupUser } = require("../controllers/signUpUser");
// const { addEmployees } = require("../controllers/addEmployees");
// const { getEmployeeById } = require("../controllers/getEmployeeById");

//middlewares

const router = express.Router();

// router.route("/").get();
router.route("/signUp").post(signupUser);
// router.route("/:empId").get(getEmployeeById);

module.exports = router;
