const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('You are in the group route!');
});

module.exports = router;
