// routes/cloudLoginRoutes.js
const express = require('express');
const { check } = require('express-validator');
const { cloudLogin } = require('../controllers/connectorLoginController');
const router = express.Router();

// Define the POST route for cloud login
router.post(
  '/cloud-login', // Endpoint for cloud login
  [
    check('identifier', 'Identifier (email/username) is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
  ],
  cloudLogin
);

module.exports = router;
