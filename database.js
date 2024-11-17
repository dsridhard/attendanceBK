const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './leave-tracker.db', // SQLite database file
});

module.exports = sequelize;
