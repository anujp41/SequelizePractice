const router = require('express').Router();
const { userHelpers } = require('../controller');

router.get('/', (req, res) => {
  userHelpers
    .getAllUsers()
    .then(users => res.json(users))
    .catch(err => {
      console.log(err);
      res.status(404).json({ error: 'Server error' });
    });
});

module.exports = router;
