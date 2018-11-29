const { db, User, Kudo } = require('../model');
const UserSeed = require('./user');
const KudoSeed = require('./kudo');

const seed = () => {
  console.log('Seeding Database');
  db.sync({ force: true })
    .then(() => User.bulkCreate(UserSeed))
    .then(() => Kudo.bulkCreate(KudoSeed))
    .then(() => {
      console.log('seeding done!');
      db.close();
    });
};

seed();
