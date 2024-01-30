const mongoose = require('mongoose');

// Define the schema for the inventory item
const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

// Create the Inventory model
const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
