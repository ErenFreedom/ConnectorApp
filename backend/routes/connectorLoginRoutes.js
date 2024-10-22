// routes/connectorLoginRoutes.js
const express = require('express');
const { check } = require('express-validator');
const { connectorCloudLogin } = require('../controllers/connectorLoginController');
const router = express.Router();

// Define the POST route for connector cloud login
router.post(
    '/connector-cloud-login',  // Connector frontend will hit this endpoint
    [
        check('identifier', 'Identifier (email/username) is required').not().isEmpty(),
        check('password', 'Password is required').not().isEmpty(),
    ],
    connectorCloudLogin
);

module.exports = router;
