const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/session');
const checkRol = require('../middleware/rol');
const customHeader = require('../middleware/customHeader');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');

//TODO http://localhost:3000/tracks GET, POST, DELETE, PUT

/**
 * Lista los items
 */
router.get('/', authMiddleware, getItems);

/**
 * Obtiene un item
 */
router.get('/:id', validatorGetItem, getItem);

/**
 * Crea un registro
 */
router.post('/',
           validatorCreateItem,
           checkRol(["admin"]),
           createItem);

/**
 * Actualizar un registro
 */
 router.put('/:id', validatorGetItem, validatorCreateItem, updateItem);

 /**
 * Elimina un registro
 */
  router.delete('/:id', validatorGetItem, deleteItem);


module.exports = router;