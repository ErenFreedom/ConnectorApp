const express = require('express');
const http = require('http'); // You mentioned switching to HTTP
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// Import routes
const connectorLoginRoutes = require('./routes/connectorLoginRoutes'); // Cloud login route
const connectorAccessRoutes = require('./routes/connectorAccessRoutes');
const desigoConnectionRoutes = require('./routes/desigoConnectionRoutes');

// Initialize the Express app
const app = express();

// Use security middleware
app.use(helmet());

// Enable CORS
app.use(cors({
  origin: ['http://your-frontend-url.com'],  // Frontend URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', connectorLoginRoutes);
app.use('/api', connectorAccessRoutes);
app.use('/api', desigoConnectionRoutes);

// Start the HTTP server
http.createServer(app).listen(3001, () => {
  console.log('Connector App backend running on http://ec2-3-110-178-15.ap-south-1.compute.amazonaws.com:3001');
});
