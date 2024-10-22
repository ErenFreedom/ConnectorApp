// server.js
const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

// Import proxy route
const proxyCloudRoutes = require('./routes/proxyCloudRoutes'); // Proxy route for Cloud API

// SSL Certificates
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),   // Private key path
    cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem')), // Certificate path
};

// Initialize the Express app
const app = express();

// Use security middleware
app.use(helmet());

// Enable CORS (optional)
app.use(cors({
    origin: ['https://your-frontend-url.com'],  // Allow requests from frontend
    credentials: true,
    methods: ['GET', 'POST']
}));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use proxy routes
app.use('/api', proxyCloudRoutes);  // All /api/proxy-cloud-login requests handled by this route

// Start the HTTPS server
https.createServer(sslOptions, app).listen(3001, () => {
    console.log('Connector App backend running on https://your-connector-backend-domain.com:3001');
});
