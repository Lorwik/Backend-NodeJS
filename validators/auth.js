const { check } = require('express-validator');
const validationResult = require("../utils/handleValidator");

const validatorRegister = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:3, max:30}),

    check("age")
    .exists()
    .notEmpty()
    .isNumeric(),

    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),

    check("email")
    .exists()
    .notEmpty()
    .isEmail(),

    (req, res, next) => {
        validationResult(req, res, next);
    }


];

const validatorLogin = [
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:3, max:15}),

    check("email")
    .exists()
    .notEmpty()
    .isEmail(),

    (req, res, next) => {
        validationResult(req, res, next);
    }


];

module.exports = { validatorRegister, validatorLogin };