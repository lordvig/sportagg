var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var passport = require('passport');
// var session = require('express-session');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var index = require('./server/index');
var users = require('./server/users');
var auth = require('./server/auth');
var config = require('./server/config');
var sports = require('./server/sports');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

mongoose.connect(config.mongo_url);
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '')));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));

// app.use(session({
//   secret: 'jcakbj',
//   cookie: {maxAge: 60000},
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

app.use(function(req,res,next){
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if(token){
    jwt.verify(token, config.secret, function(err, decoded){
      if(err){
        return res.json({success: false, error: 'Invalid token'});
      } else {
        // console.log(decoded);
        req.user = decoded;
        next();
      }
    });
  } else {
    next();
  }
});

app.use('/api', index);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/sports', sports);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
