var express = require('express');
var router = express.Router();
var User = require('./models/user.model.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({},function(err,users){
    if(err) return next(err);
    res.json(users);
  });
});

router.get('/me', function(req,res,next){
  if(req.user){
    res.json(req.user);
  } else {
    res.json({error:"login first"})
  }
})

router.post('/create',function(req, res, next){
  User.create(req.body,function(err,user){
    if(err) return next(err);
    res.json(user);
  });
})
module.exports = router;
