const router = require('express').Router();
const Sequelize = require('sequelize');
const User = require('../model').User;
const Kudo = require('../model').Kudo;

//HELPER FUNCTION TO GET ALL USERS
const getAllUsers = () => User.findAll({ attributes: ['id', 'name'] });

//HELPER FUNCTIONS THAT RETRIEVES MESSAGES RECEIVED
const getToMessages = id => {
  return Kudo.findAndCountAll({
    where: {
      toId: id
    },
    attributes: ['id', 'title', 'message'],
    include: [{ model: User, as: 'from', attributes: ['name'] }]
  });
};

//HELPER FUNCTIONS THAT RETRIEVES MESSAGES SENT
const getFromMessages = id => {
  return Kudo.findAndCountAll({
    where: {
      fromId: id
    },
    attributes: ['id', 'title', 'message'],
    include: [{ model: User, as: 'to', attributes: ['name'] }]
  });
};

//Retrieves all users
router.get('/', (req, res) =>
  getAllUsers()
    .then(users => res.json(users))
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    })
);

//Retrieves all sent and received messages
router.get('/interaction/:id', (req, res) => {
  const { id } = req.params;
  return Promise.all([getToMessages(id), getFromMessages(id)]).then(
    ([sentTo, receivedFrom]) => res.json({ sentTo, receivedFrom })
  );
});

//Retrives list of users messages sent to
router.get('/sender/:id', (req, res) => {
  const { id } = req.params;
  getToMessages(id)
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
});

//Retrieves list of user messages received from
router.get('/receiver/:id', (req, res) => {
  const { id } = req.params;
  getFromMessages(id)
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

//TEST ROUTES

const handleHey = () => {
  return new Promise(function(resolve, reject) {
    resolve({ msg: 'hey' });
  });
};

const handleThere = () => {
  return new Promise(function(resolve, reject) {
    resolve({ msg: 'there' });
  });
};

router.get('/combine', (req, res) => {
  return Promise.all([handleHey(), handleThere()]).then(result =>
    res.json(result)
  );
});

router.get('/hey', (req, res) => handleHey().then(result => res.json(result)));
router.get('/there', (req, res) =>
  handleThere().then(result => res.json(result))
);

module.exports = router;
