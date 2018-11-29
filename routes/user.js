const router = require('express').Router();
const { Op } = require('sequelize');
const User = require('../model').User;
const Kudo = require('../model').Kudo;

//Retrieves all users
router.get('/', (req, res) => {
  User.findAll({})
    .then(users => res.json(users))
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    });
});

//Retrives list of users messages sent to
router.get('/sender/:id', (req, res) => {
  const { id } = req.params;
  Kudo.findAll({
    where: {
      [Op.or]: [{ toId: { [Op.eq]: id } }, { fromId: { [Op.eq]: id } }]
    },
    attributes: ['id', 'title', 'message'],
    include: [
      { model: User, as: 'to', attributes: ['name'] },
      { model: User, as: 'from', attributes: ['name'] }
    ]
  })
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
});

//Posts users to db
router.post('/', (req, res) => {
  User.create(req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    });
});

//Deletes users and remove associated to/from kudos
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  User.destroy({ where: { id } })
    .then(result => {
      res.status(200).json({ message: 'User deleted!' });
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    });
});

router.get('/combine', (req, res) => {
  res
    .redirect('/api/user/hey')
    .then(user => res.json({ user, result: 'this is msg' }));
});

router.get('/hey', (req, res) => res.json({ msg: 'hey' }));
router.get('/there', (req, res) => res.json({ msg: 'there' }));

module.exports = router;
