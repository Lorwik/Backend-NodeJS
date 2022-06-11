const express = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");

/**
 * Crear un registro
 */
router.post("/register", validatorRegister, registerCtrl );

/**
 * Login
 */
 router.post("/login", validatorLogin, loginCtrl );

module.exports = router;