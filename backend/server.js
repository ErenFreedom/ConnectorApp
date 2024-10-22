const express = require('express');
const http = require('http');  // Use http instead of https
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

// Import routes
const cloudLoginRoutes = require('./routes/connectorLoginRoutes');  // Cloud login route

// Initialize the Express app
const app = express();

// Use security middleware
app.use(helmet());

// Enable CORS
app.use(cors({
    origin: ['http://your-frontend-url.com'],  // Frontend URL (replace with your actual domain)
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', cloudLoginRoutes);

// Start the HTTP server
http.createServer(app).listen(3001, () => {
    console.log('Connector App backend running on http://ec2-3-110-178-15.ap-south-1.compute.amazonaws.com:3001');
});
