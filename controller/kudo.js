const { Op } = require('sequelize');
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
  searchKudo(term) {
    // return term;
    return Kudo.findAll({
      attributes: ['id', 'title', 'message'],
      where: {
        [Op.or]: {
          title: {
            [Op.iLike]: `%${term}%` //case insensitive search for 'great'
          },
          message: {
            [Op.iLike]: `%${term}%` //case insensitive search for 'great'
          }
        }
      },
      include: [
        {
          model: User,
          as: 'to',
          attributes: ['id', 'name'],
          where: { name: { [Op.iLike]: '%mama%' } }
        },
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
