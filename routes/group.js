const router = require('express').Router();
const { groupHelpers } = require('../controller');

router.get('/', (req, res) => {
  groupHelpers.getAllGroups().then(response => res.json(response));
});

module.exports = router;
