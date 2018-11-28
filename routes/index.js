const router = require('express').Router();
const userRoutes = require('./user');
const kudoRoutes = require('./kudo');

router.use('/user', userRoutes);
router.use('/kudo', kudoRoutes);

module.exports = router;
