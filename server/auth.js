var express = require('express');
var router = express.Router();
var User = require('./models/user.model.js');
var jwt = require('jsonwebtoken');
var config = require('./config');

router.post('/authenticate', function(req, res) {
  User.findOne({username: req.body.username},function(err,user){
    if(err) res.status(500).json({success: false,error: err});
    if(!user) res.status(405).json({success: false,error: "No user found"});
    else if(user.password != req.body.password) res.status(403).json({success: false,error: "Wrong password"});
    else {
      var token = jwt.sign({id: user._id, username: user.username}, config.secret, {
        expiresIn: 24*60*60 // expires in 24 hours
      });
      res.json({success: true,token: token });
    }
  });
});
router.post('/register',function(req,res){
  User.findOne({username: req.body.username},function(err,old_user){
    if(err) res.status(500).json({success: false,error: err});
    if(old_user) res.status(405).json({success: false,error: "User already exists"});
    else {
      User.create({username: req.body.username, password: req.body.password},function(err,user){
        var token = jwt.sign({id: user._id, username: user.username}, config.secret, {
          expiresIn: 24*60*60 // expires in 24 hours
        });
        res.json({success: true,token: token });
      })
    }
  })
})
module.exports = router;
