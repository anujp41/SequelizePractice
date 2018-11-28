const db = require('../db');

const User = require('./User');
const Kudo = require('./Kudo');

Kudo.belongsTo(User, { as: 'to' });
Kudo.belongsTo(User, { as: 'from' });

module.exports = { db, User, Kudo };
