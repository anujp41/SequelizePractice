const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./index').User;

const Kudo = db.define('kudo', {
  title: {
    type: Sequelize.STRING,
    require: true
  },
  message: {
    type: Sequelize.STRING,
    require: true
  }
});

module.exports = Kudo;
