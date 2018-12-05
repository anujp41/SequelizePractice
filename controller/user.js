const { User, Group, GroupUser } = require('../model');

module.exports = {
  getAllUsers() {
    return User.findAll({
      attributes: ['id', 'name'],
      include: {
        model: Group,
        through: {
          model: GroupUser,
          attributes: []
        },
        attributes: ['name', 'purpose', 'keywords']
      }
    });
  }
};
