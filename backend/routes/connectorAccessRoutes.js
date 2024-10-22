const express = require('express');
const { check } = require('express-validator');
const { accessDatabaseAndInsert } = require('../controllers/connectorAccessController');
const router = express.Router();

// Route to access the database and insert data
router.post(
    '/access-database', // The endpoint to access the database using activation key
    [
        check('activationKey', 'Activation key is required').not().isEmpty(),
        check('tableName', 'Table name is required').not().isEmpty(),
        check('data', 'Data is required').not().isEmpty(),
    ],
    accessDatabaseAndInsert
);

module.exports = router;
