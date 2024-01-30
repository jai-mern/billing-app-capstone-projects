// Middleware for user authentication
const authenticationMiddleware = (req, res, next) => {
    // Check if user is authenticated
    if (!req.user) {
        return res.status(401).json({ msg: 'Unauthorized' });
    }
    // If authenticated, proceed to next middleware or route handler
    next();
};

module.exports = authenticationMiddleware;
