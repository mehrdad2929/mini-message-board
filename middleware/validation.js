const { body, validationResult } = require("express-validator");

const validateMessage = [
    body("username")
        .trim()
        .notEmpty()
        .withMessage("Name cannot be empty.")
        .isLength({ min: 1, max: 50 })
        .withMessage("Name must be between 1 and 50 characters.")
        .isAlpha('en-US', { ignore: ' ' })
        .withMessage("Name must only contain letters and spaces."),
    body("text")
        .trim()
        .notEmpty()
        .withMessage("Message cannot be empty.")
        .isLength({ min: 1, max: 500 })
        .withMessage("Message must be between 1 and 500 characters.")
];

module.exports = { validateMessage, validationResult };
