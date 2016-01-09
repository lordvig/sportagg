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
      client.query('select id,username from users where username=\''+username+'\' and password=\''+password+'\';',function(err,result){
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
  failureRedirect: '/#/login'
}));
router.get('/',function(req,res){
  res.redirect('/#/login');
});
router.get('/logout',function(req,res){
  if(req.user){
    req.logout();
    req.session.message="You have been logged out";
    res.redirect('/');
  } else {
    res.redirect('/');
  }
});
router.post('/register',function(req,res,next){
  var user=req.body.username,pass=req.body.password;
  pg.connect(db_url,function(err,client,db_done){
    if(err){
      console.error('db err',err);
    }
    client.query('insert into users(username,password) values(\''+user+'\',\''+pass+'\');',function(err,result){
      db_done();
      if(err){
        console.error('db register error',err);
        req.session.message="Could not register";
        res.redirect('/');
      } else {
        console.log('register result',result);
        req.session.message="You have been registered";
        res.redirect('/');
      }
    });
  });
});
router.get('/register',function(req,res){
  res.redirect('/#/register');
});
module.exports = {
  router: router
};
