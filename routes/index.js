var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', { size: 19});
});

router.get('/index', function(req, res) {
    res.render('index', { size: 19});
});

router.get('/signup', function(req, res) {
    res.render('signup');
});

module.exports = router;