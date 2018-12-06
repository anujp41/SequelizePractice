const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define(
  'user',
  {
    name: {
      type: Sequelize.STRING,
      require: true
    },
    email: {
      type: Sequelize.STRING,
      require: true,
      validate: {
        isEmail: true
      }
    }
  },
  {
    timestamps: false
  }
);

module.exports = User;
