const router = require('express').Router();
const { kudoHelpers } = require('../controller');

//Retrieves all kudos as well as info on the sender/received
router.get('/', (req, res) => {
  kudoHelpers
    .getAllKudos()
    .then(kudos => res.json(kudos))
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    });
});

//Posts new kudos to database
router.post('/', (req, res) => {
  kudoHelpers
    .createKudo(req.body)
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
  kudoHelpers
    .deleteKudo(id)
    .then(result => {
      res.status(200).json({ message: 'Kudo deleted!' });
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    });
});

module.exports = router;
