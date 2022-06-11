const { check } = require('express-validator');
const validationResult = require("../utils/handleValidator");

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty(),

    (req, res, next) => {
        validationResult(req, res, next);
    }


];

module.exports = { validatorGetItem };