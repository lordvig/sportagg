var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var express = require('express');
var router = express.Router();

var user = {username:'vignesh'};
passport.use(new LocalStrategy(
  function(username, password, done) {
    if(username=='vignesh' && password=='pass')
      return done(null,user);
    else
      return done(null,false,{message:'Incorrect credentials'})
  }
));
passport.serializeUser(function(user, done) {
  done(null, 1);
});
passport.deserializeUser(function(id, done) {
  if(id==1)
    return done(null,user)
  return done(true,false);
});
router.post('/',passport.authenticate('local',{
  successRedirect: '/',
  failureRedirect: '/auth'
}));
router.get('/',function(req,res,next){
  res.render('login');
})
router.get('/logout',function(req,res,next){
  if(req.user){
    req.logout();
    res.redirect('/auth');
  } else {
    res.redirect('/');
  }
})
var isAuth = passport.authenticate('local');

module.exports = {
  router: router,
  isAuth: isAuth
}
