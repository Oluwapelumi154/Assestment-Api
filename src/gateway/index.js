const router = require('express').Router();
const { bookRoute } = require('../components/book/routes');

router.use('/v1', bookRoute);
module.exports = router;
