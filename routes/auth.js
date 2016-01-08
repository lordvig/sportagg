var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var express = require('express');
var router = express.Router();
var pg = require('pg');

var db_url = 'postgres://ueyntqoaryqfki:IETq0kF0W4pF5xuRge89Uos3Yn@ec2-54-83-52-71.compute-1.amazonaws.com:5432/d9c0dlkf08iie6?ssl=true';
passport.use(new LocalStrategy(
  function(username, password, done) {
    pg.connect(db_url,function(err,client,db_done){
      if(err){
        // console.log(process.env.DATABASE_URL)
        console.log(err);
        return done(null,false,{err:err,message:'DB error'});
      }
      client.query('select id,user from users where username=\''+username+'\' and password=\''+password+'\';',function(err,result){
        db_done();
        console.log(result.rows);
        if(err){
          return done(null,false,{message:'DB error'});
        }
        if(result && result.rows.length>0){
          return done(null,result.rows[0]);
        } else {
          return done(null,false,{err:err,message:'Incorrect credentials'});
        }
      });
    });
  }
));
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  pg.connect(db_url,function(err,client,db_done){
    if(err){
      console.log(err);
      return done(true,false);
    }
    client.query('select id,username from users where id=\''+id+'\';', function(err,result){
      db_done();
      console.log(result.rows);
      if(err){
        return done(true,false);
      }
      if(result && result.rows.length>0){
        return done(null,result.rows[0]);
      } else {
        return done(true,false);
      }
    });
  });
});
router.post('/',passport.authenticate('local',{
  successRedirect: '/',
  failureRedirect: '/auth'
}));
router.get('/',function(req,res){
  res.render('login');
});
router.get('/logout',function(req,res){
  if(req.user){
    req.logout();
    res.redirect('/auth');
  } else {
    res.redirect('/');
  }
});

module.exports = {
  router: router
};
