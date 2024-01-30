const logger = require('../utils/logger');
const validator = require('../utils/validator');

// Example usage
logger('This is an information message');

const email = 'test@example.com';
if (validator.validateEmail(email)) {
    console.log('Email is valid');
} else {
    console.log('Email is invalid');
}

const password = 'password123';
if (validator.validatePassword(password)) {
    console.log('Password is strong');
} else {
    console.log('Password is weak');
}
