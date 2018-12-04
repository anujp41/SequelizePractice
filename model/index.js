const db = require('../db');

const User = require('./User');
const Group = require('./Group');
const GroupUser = require('./GroupUser');

User.belongsToMany(Group, { through: GroupUser });
Group.belongsToMany(User, { through: GroupUser });
User.hasOne(Group, { as: 'moderator' });

module.exports = { db, User, Group, GroupUser };
