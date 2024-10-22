// server.js
const express = require('express');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const connectorLoginRoutes = require('./routes/connectorLoginRoutes'); // Import renamed route

// SSL Certificates (for HTTPS)
const sslOptions = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem')
};

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', connectorLoginRoutes);  // Use the renamed connector login route

// Start the HTTPS server
https.createServer(sslOptions, app).listen(3001, () => {
    console.log('Connector app running on https://localhost:3001');
});
