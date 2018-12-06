const Sequelize = require('sequelize');
const db = require('../db');

const GroupUser = db.define(
  'groupUser',
  {},
  {
    timestamps: false
  }
);

module.exports = GroupUser;
