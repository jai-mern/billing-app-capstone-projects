const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define routes for authentication operations
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);
router.get('/user', authController.getCurrentUser);

module.exports = router;
