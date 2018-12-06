const router = require('express').Router();
const userRoutes = require('./user');
const groupRoutes = require('./group');

router.use('/user', userRoutes);
router.use('/group', groupRoutes);

router.use(function(req, res, next) {
  if (!req.route) {
    return res.json({ Error: `Route: ${req.url} not found!` });
  }
});

module.exports = router;
