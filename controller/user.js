const { User, Group, GroupUser } = require('../model');

module.exports = {
  getAllUsers() {
    return User.findAll({
      attributes: ['id', 'name'],
      include: {
        model: Group,
        attributes: ['name'],
        through: {
          model: GroupUser,
          attributes: []
        }
      }
    });
  }
};
