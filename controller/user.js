const User = require('../model').User;
const Kudo = require('../model').Kudo;

//HELPER FUNCTION TO GET ALL USERS
const getAllUsers = () => User.findAll({ attributes: ['id', 'name'] });

//HELPER FUNCTION THAT RETRIEVES MESSAGES RECEIVED
const getToMessages = id => {
  return Kudo.findAndCountAll({
    where: {
      toId: id
    },
    attributes: ['id', 'title', 'message'],
    include: [{ model: User, as: 'from', attributes: ['name'] }]
  });
};

//HELPER FUNCTION THAT RETRIEVES MESSAGES SENT
const getFromMessages = id => {
  return Kudo.findAndCountAll({
    where: {
      fromId: id
    },
    attributes: ['id', 'title', 'message'],
    include: [{ model: User, as: 'to', attributes: ['name'] }]
  });
};

//HELPER FUNCTION TO CREATE NEW USER
const createUser = user => User.create(user);

//HELPER FUNCTION TO DELETE EXISTING USER
const removeUser = id => User.destroy({ where: { id } });

module.exports = {
  createUser,
  getAllUsers,
  getToMessages,
  getFromMessages,
  removeUser
};
