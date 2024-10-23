const express = require('express');
const { connectToDesigo } = require('../controllers/desigoConnectionController');
const router = express.Router();

// Route to connect to Desigo CC and fetch token
router.post('/desigo-connect', connectToDesigo);

module.exports = router;
