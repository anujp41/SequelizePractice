const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/user-kudo', {
  logging: false
});
module.exports = db;
