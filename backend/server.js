const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

// Import routes (make sure to import your connector-related routes here)
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

// Enable CORS (you can restrict it to your domain if necessary)
app.use(cors({
    origin: ['http://your-frontend-url.com'],  // Frontend URL (update to your domain or IP)
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes (ensure your routes are correctly set up)
app.use('/api', connectorLoginRoutes);

// HTTPS server setup
https.createServer(sslOptions, app).listen(3001, () => {
    console.log('Connector App backend running on https://ec2-3-110-178-15.ap-south-1.compute.amazonaws.com:3001');
});


