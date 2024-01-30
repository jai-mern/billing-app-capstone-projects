const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

// Define routes for billing operations
router.post('/billing', billingController.createBillingRecord);
router.get('/billing', billingController.getBillingHistory);

module.exports = router;
