// routes/proxyCloudRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Proxy route to forward requests to Cloud API
router.post('/proxy-cloud-login', async (req, res) => {
    try {
        // Make a request to the Cloud API directly
        const cloudResponse = await axios.post('https://ec2-13-126-117-233.ap-south-1.compute.amazonaws.com/api/cloudlogin', req.body, {
            headers: { 'Content-Type': 'application/json' }
        });

        // Send back the response from Cloud API directly
        res.status(cloudResponse.status).json(cloudResponse.data);
    } catch (error) {
        console.error('Error proxying request to Cloud API:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({
            message: 'Failed to connect to Cloud API',
            error: error.response ? error.response.data : error.message
        });
    }
});

module.exports = router;
