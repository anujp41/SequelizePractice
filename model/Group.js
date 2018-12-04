const Sequelize = require('sequelize');
const db = require('../db');

const Group = db.define('group', {
  name: {
    type: Sequelize.STRING,
    require: true
  },
  purpose: {
    type: Sequelize.TEXT
  },
  keywords: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    require: true,
    defaultValue: [],
    validate: {
      len: [3, 10]
    }
  }
});

module.exports = Group;
