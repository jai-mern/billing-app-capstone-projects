const app = require('./app');
const mongoose = require('mongoose');

// Connect to MongoDB database
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
