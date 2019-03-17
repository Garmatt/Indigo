var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'name'
  },
  function(username, password, done) {
	  var criteria = (username.indexOf('@') === -1) ? {name: username} : {email: username};
    User.findOne(criteria, function (err, user) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!user) {
        return done(null, false, {
          messageKey: 'ERR_USER_NOT_FOUND',
		  errorField: 'user'
        });
      }
      // Return if password is wrong
      if (!user.validPassword(password)) {
        return done(null, false, {
          messageKey: 'ERR_PASSWORD',
		  errorField: 'password'
        });
      }
      // If credentials are correct, return the user object
      return done(null, user);
    });
  }
));