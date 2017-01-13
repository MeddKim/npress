var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/list', function(req, res, next) {
    console.info(req.query);
    res.send('all over the world');
});

module.exports = router;
