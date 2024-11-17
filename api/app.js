const express = require('express');
const bodyParser = require('body-parser');
const leaveRoutes = require('../routes/leaveRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/leaves', leaveRoutes);

// Export the app
module.exports = app;
