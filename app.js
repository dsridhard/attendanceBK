const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const Leave = require('./models/leave');
const leaveRoutes = require('./routes/leaveRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/leaves', leaveRoutes);

// Sync database and start server
(async () => {
  try {
    await sequelize.sync(); // Creates tables if they don't exist
    console.log('Database connected.');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start the server:', error.message);
  }
})();
