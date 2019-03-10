var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var logger = require('morgan');
var favicon = require('serve-favicon');
var passport = require('passport');

require('./models/db');
require('./config/passport');

var indexRouter = require('./routes/index');
var accountRouter = require('./routes/account');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('./htmlEngine'));
app.set('view engine', 'html');

//app.use(logger('dev'));
//app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/account', accountRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
  else {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  }
});

app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(passport.initialize());

app.listen(3000);

module.exports = app;