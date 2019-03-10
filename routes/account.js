var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');
var auth = jwt({
  secret: 'TO_DO_RETRIEVE_FROM_SOMEWHERE_ELSE',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/profile', auth, ctrlProfile.profileRead); // /account/profile

// authentication
router.post('/register', ctrlAuth.register); // /account/register
router.post('/login', ctrlAuth.login); // /account/login

module.exports = router;