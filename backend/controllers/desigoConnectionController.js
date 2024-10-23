const axios = require('axios');
require('dotenv').config();

// Controller function to connect to Desigo CC and fetch token
exports.connectToDesigo = async (req, res) => {
    const { username, password } = req.body;  // Expect username and password from frontend

    try {
        // Make a POST request to Desigo CC token endpoint
        const response = await axios.post(
            'https://192.168.22.160/WebServiceApplication/api/token',  // Replace with actual API endpoint
            `grant_type=password&username=${username}&password=${password}`,  // Data for the API call
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    // Bypass SSL certificate validation (if required)
                    rejectUnauthorized: false
                }
            }
        );

        // Extract the token from the response
        const token = response.data.access_token;

        // Send the token back to the frontend
        res.status(200).json({
            message: 'Successfully connected to Desigo CC and fetched token.',
            token: token
        });

    } catch (error) {
        console.error('Error connecting to Desigo CC:', error.message);
        res.status(500).json({
            message: 'Failed to connect to Desigo CC or retrieve token.',
            error: error.message
        });
    }
};
