const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const inventoryRoutes = require('./routes/inventoryRoutes');
const billingRoutes = require('./routes/billingRoutes');
const authRoutes = require('./routes/authRoutes');

// Mount routes
app.use('/api/inventory', inventoryRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server Error');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1); // Exit the process if unable to connect to MongoDB
});

module.exports = app;
