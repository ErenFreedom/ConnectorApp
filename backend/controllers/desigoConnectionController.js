const axios = require('axios');
const { validationResult } = require('express-validator');

// Controller to connect to Desigo CC
exports.connectToDesigo = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Desigo CC credentials provided in the request
    const { username, password } = req.body;

    try {
        // Make POST request to Desigo CC API to get a token
        const response = await axios.post('https://bmspc135/WSI_SERVICES/api/token', {
            grant_type: 'password',
            username: username || 'defaultadmin',
            password: password || 'desigo'  // You can set default values or fetch from .env
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // If successful, the token will be returned
        const token = response.data.access_token; // Assuming access token is returned in this field
        res.status(200).json({
            message: 'Connected to Desigo CC successfully.',
            token: token
        });

    } catch (error) {
        console.error('Error connecting to Desigo CC:', error.response ? error.response.data : error.message);
        res.status(500).json({
            message: 'Error connecting to Desigo CC. Please check the URL or credentials.',
            error: error.message
        });
    }
};
