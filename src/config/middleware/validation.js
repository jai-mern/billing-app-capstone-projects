// Request validation middleware
const validationMiddleware = (req, res, next) => {
    // Validate request parameters, body, headers, etc.
    // For example, check if required fields are present in the request
    if (!req.body.name || !req.body.email) {
        return res.status(400).json({ msg: 'Name and email are required' });
    }
    // If validation passes, proceed to next middleware or route handler
    next();
};

module.exports = validationMiddleware;
