const router = require('express').Router();
const { Kudo, User } = require('../model');

//Retrieves all kudos as well as info on the sender/received
router.get('/', (req, res) => {
  Kudo.findAll({
    attributes: ['id', 'title', 'message'],
    include: [
      { model: User, as: 'to', attributes: ['id', 'name'] },
      { model: User, as: 'from', attributes: ['id', 'name'] }
    ]
  })
    .then(kudos => res.json(kudos))
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    });
});

//Posts new kudos to database
router.post('/', (req, res) => {
  Kudo.create(req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    });
});

//Removes kudos
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Kudo.destroy({ where: { id } })
    .then(result => {
      res.status(200).json({ message: 'Kudo deleted!' });
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    });
});

module.exports = router;
