const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

// Import routes
const connectorLoginRoutes = require('./routes/connectorLoginRoutes');  // Adjust the path if needed

// SSL Certificates (update paths to use certs from 'backend/certs' folder)
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),   // Private key path
    cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem')), // Certificate path
};

// Initialize the Express app
const app = express();

// Use security middleware
app.use(helmet());

// Enable CORS
app.use(cors({
    origin: ['https://your-frontend-url.com'],  // Frontend URL
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', connectorLoginRoutes);

// Start the HTTPS server
https.createServer(sslOptions, app).listen(3001, () => {
    console.log('Connector App backend running on https://ec2-3-110-178-15.ap-south-1.compute.amazonaws.com:3001');
});
