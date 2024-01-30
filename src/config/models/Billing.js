const mongoose = require('mongoose');

// Define the schema for the billing details
const billingSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inventory' // Reference to the Inventory model
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Billing model
const Billing = mongoose.model('Billing', billingSchema);

module.exports = Billing;
