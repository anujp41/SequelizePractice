const { Kudo, User } = require('../model');

const kudoHelpers = {
  getAllKudos() {
    return Kudo.findAll({
      attributes: ['id', 'title', 'message'],
      include: [
        { model: User, as: 'to', attributes: ['id', 'name'] },
        { model: User, as: 'from', attributes: ['id', 'name'] }
      ]
    });
  },
  createKudo(kudo) {
    return Kudo.create(kudo);
  },
  deleteKudo(id) {
    return Kudo.destroy({ where: { id } });
  }
};

module.exports = kudoHelpers;
