const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Leave = sequelize.define('Leave', {
  leaveType: {
    type: DataTypes.STRING,
    allowNull: false, // E.g., CL, PL
  },
  leaveCount: {
    type: DataTypes.INTEGER,
    allowNull: false, // Number of days
  },
  description: {
    type: DataTypes.STRING, // Optional details
    allowNull: true,
  },
});

module.exports = Leave;
