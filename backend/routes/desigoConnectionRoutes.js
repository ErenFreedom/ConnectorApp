const express = require('express');
const { check } = require('express-validator');
const { connectToDesigo } = require('../controllers/connectToDesigoController');
const router = express.Router();

// Define the POST route for connecting to Desigo CC
router.post(
    '/connect-desigo',  // Endpoint for Desigo CC connection
    [
        check('username', 'Username is required').not().isEmpty(),
        check('password', 'Password is required').not().isEmpty(),
    ],
    connectToDesigo
);

module.exports = router;
