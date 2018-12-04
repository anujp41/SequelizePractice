const { db, User, Group, GroupUser } = require('../model');
const UserSeed = require('./user');
const GroupSeed = require('./group');
const GropUserSeed = require('./groupUser');

const seed = () => {
  console.log('Seeding Database');
  db.sync({ force: true })
    .then(() => User.bulkCreate(UserSeed))
    .then(() => Group.bulkCreate(GroupSeed))
    .then(() => GroupUser.bulkCreate(GropUserSeed))
    .then(() => {
      console.log('Seeding complete!');
      db.close();
    });
};

seed();
