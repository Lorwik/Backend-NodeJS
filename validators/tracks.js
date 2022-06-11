const { check } = require('express-validator');
const validationResult = require("../utils/handleValidator");

const validatorCreateItem = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({ min: 5, max: 90 }),

    check("album")
    .exists()
    .notEmpty(),

    check("cover")
    .exists()
    .notEmpty(),

    check("artista")
    .exists()
    .notEmpty(),

    check("artista.name")
    .exists()
    .notEmpty(),

    check("artista.nickname")
    .exists()
    .notEmpty(),

    check("artista.nationality")
    .exists()
    .notEmpty(),

    check("duracion.start")
    .exists()
    .notEmpty(),

    check("duracion.end")
    .exists()
    .notEmpty(),

    check("mediaId")
    .exists()
    .notEmpty(),

    (req, res, next) => {
        validationResult(req, res, next);
    }


];

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty()
    .isMongoId(),

    (req, res, next) => {
        validationResult(req, res, next);
    }


];

module.exports = { validatorCreateItem, validatorGetItem };