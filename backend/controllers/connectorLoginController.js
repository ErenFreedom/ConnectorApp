const axios = require('axios');
const https = require('https');

// Cloud Login Controller for the Connector App
exports.connectorCloudLogin = async (req, res) => {
    const { identifier, password } = req.body;

    try {
        // Create an httpsAgent to ignore SSL errors (only for testing; remove in production)
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });

        // Make a request to the Cloud backend's /api/cloudlogin endpoint
        const cloudResponse = await axios.post('https://ec2-13-126-117-233.ap-south-1.compute.amazonaws.com/api/cloudlogin', {
            identifier,
            password
        }, {
            headers: { 'Content-Type': 'application/json' },
            httpsAgent: httpsAgent  // Add httpsAgent to ignore SSL
        });

        if (cloudResponse.status === 200) {
            return res.status(200).json({
                message: 'Cloud login successful. Activation key has been sent to your email.',
                data: cloudResponse.data
            });
        } else {
            return res.status(cloudResponse.status).json({
                message: cloudResponse.data.message || 'Cloud login failed.'
            });
        }

    } catch (error) {
        console.error('Error communicating with Cloud backend:', error.message || error.response.data);
        return res.status(500).json({
            message: 'Error connecting to Cloud backend. Please try again later.'
        });
    }
};
