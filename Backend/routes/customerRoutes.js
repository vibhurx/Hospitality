const express = require("express")
const router = express.Router();
const {customerSignUp, removeCustomer,customerLogin} = require("../controllers/customerControllers")

// ? Customer SignUp
router.post("/signup",customerSignUp);

// ? Customer Login
router.post("/login",customerLogin);

// ? Remove Customer
router.delete("/remove",removeCustomer)

module.exports = router