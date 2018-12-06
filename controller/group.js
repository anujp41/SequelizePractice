const { User, Group, GroupUser } = require('../model');

module.exports = {
  getAllGroups() {
    return Group.findAll({
      attributes: ['id', 'name', 'purpose', 'keywords', 'moderatorId'],
      include: [{ model: User }]
    });
  }
};
