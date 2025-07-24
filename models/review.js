const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Review = sequelize.define('Review', {
  company_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  pros: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  cons: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true,
});

module.exports = Review;
