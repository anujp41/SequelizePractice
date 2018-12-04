const router = require('express').Router();
const { userHelpers } = require('../controller');

//Retrieves all users
router.get('/', (req, res) =>
  userHelpers
    .getAllUsers()
    .then(users => res.json(users))
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    })
);

//Retrieves all sent and received messages
router.get('/interaction/:id', (req, res) => {
  const { id } = req.params;
  return Promise.all([
    userHelpers.getToMessages(id),
    userHelpers.getFromMessages(id)
  ]).then(([sentTo, receivedFrom]) => res.json({ sentTo, receivedFrom }));
});

//Retrives list of users messages sent to
router.get('/sender/:id', (req, res) => {
  const { id } = req.params;
  userHelpers
    .getToMessages(id)
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
});

//Retrieves list of user messages received from
router.get('/receiver/:id', (req, res) => {
  const { id } = req.params;
  userHelpers
    .getFromMessages(id)
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
});

//Posts users to db
router.post('/', (req, res) => {
  userHelpers
    .createUser(req.body)
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
  userHelpers
    .removeUser(id)
    .then(() => {
      res.status(200).json({ message: 'User deleted!' });
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    });
});

module.exports = router;
