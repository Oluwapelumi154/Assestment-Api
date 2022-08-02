const router = require('express').Router();
const { bookRoute } = require('../components/book/route');

router.use('/v1', bookRoute);
module.exports = router;
