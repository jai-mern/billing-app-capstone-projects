const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Define routes for inventory CRUD operations
router.get('/items', inventoryController.getAllItems);
router.post('/items', inventoryController.addItem);
router.put('/items/:id', inventoryController.updateItem);
router.delete('/items/:id', inventoryController.deleteItem);

module.exports = router;
