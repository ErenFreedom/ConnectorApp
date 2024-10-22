// controllers/connectorLoginController.js
const axios = require('axios');
const { validationResult } = require('express-validator');
const https = require('https');

// Cloud Login Controller for the Connector App
exports.connectorCloudLogin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { identifier, password } = req.body; // email or username, and password

    try {
        // Create an axios instance that ignores SSL certificate issues
        const axiosInstance = axios.create({
            httpsAgent: new https.Agent({ rejectUnauthorized: false }) // Disable SSL certificate validation
        });

        // Make a request to the Cloud backend's /api/cloudlogin endpoint
        const cloudResponse = await axiosInstance.post('https://ec2-13-126-117-233.ap-south-1.compute.amazonaws.com/api/cloudlogin', {
            identifier,
            password
        }, {
            headers: { 'Content-Type': 'application/json' }
        });

        // If cloud backend returns success, forward the response
        if (cloudResponse.status === 200) {
            return res.status(200).json({
                message: 'Cloud login successful. Activation key has been sent to your email.',
                data: cloudResponse.data  // Forward cloud's response to frontend
            });
        } else {
            return res.status(cloudResponse.status).json({
                message: cloudResponse.data.message || 'Cloud login failed.'
            });
        }

    } catch (error) {
        console.error('Error communicating with Cloud backend:', error.response ? error.response.data : error.message);
        return res.status(500).json({
            message: 'Error connecting to Cloud backend. Please try again later.'
        });
    }
};
