const { User, Group, GroupUser } = require('../model');

module.exports = {
  getAllUsers() {
    return User.findAll({
      attributes: ['id', 'name'],
      include: {
        model: Group,
        through: {
          model: GroupUser,
          attributes: ['groupId']
        },
        attributes: ['name', 'purpose', 'keywords']
      }
    });
  }
};
