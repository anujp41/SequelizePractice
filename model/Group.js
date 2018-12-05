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

Group.beforeBulkCreate(function(records, { fields }) {
  console.log('i am here');
  console.log(
    db.models.user.create({ name: 'Teddy', email: 'kale@kallu.com' })
  );
  return;
});

module.exports = Group;
