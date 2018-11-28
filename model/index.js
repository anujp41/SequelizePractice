const db = require('../db');

const User = require('./User');
const Kudo = require('./Kudo');

Kudo.belongsTo(User, { as: 'to', onDelete: 'cascade' });
Kudo.belongsTo(User, { as: 'from', onDelete: 'cascade' });

module.exports = { db, User, Kudo };
