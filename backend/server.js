const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

// Import routes
const connectorLoginRoutes = require('./routes/connectorLoginRoutes'); // Connector login routes

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

// Use connector login routes
app.use('/api', connectorLoginRoutes);  // All /api requests handled by connectorLoginRoutes

// Start the HTTPS server
https.createServer(sslOptions, app).listen(3001, () => {
    console.log('Connector App backend running on https://your-connector-backend-domain.com:3001');
});
