var express = require('express');
var router = express.Router();

var Ground = require('./models/ground.model.js');

router.get('/grounds/:sportName', function(req, res) {
  if(!req.user) return res.json({success: false, error: "Login first"});
  Ground.find({sportName: req.params.sportName}, function(err,data){
    // console.log(err,data);
    if(err) res.json({success: false, error: err});
    else res.json({success: true, data: data});
  });
});
router.post('/grounds/create',function(req, res, next){
  if(!req.user) return res.json({success: false, error: "Login first"});
  if(!req.user.admin) return res.json({success: false, error: "Admin access only"});
  Ground.create(req.body,function(err,ground){
    console.log(req.body)
    if(err) res.json({success: false, error: err});
    else res.json({success: true, ground: ground});
  });
});
module.exports = router;
