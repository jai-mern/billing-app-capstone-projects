// Error handling middleware
const errorHandlingMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ msg: 'Internal Server Error' });
};

module.exports = errorHandlingMiddleware;
