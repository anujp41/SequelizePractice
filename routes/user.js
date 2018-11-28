const router = require('express').Router();
const User = require('../model').User;

router.get('/', (req, res) => {
  User.findAll({})
    .then(users => res.json(users))
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    });
});

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

module.exports = router;
