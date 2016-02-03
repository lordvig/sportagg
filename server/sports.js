var express = require('express');
var router = express.Router();

var Ground = require('./models/ground.model.js');

router.get('/grounds/:sportName', function(req, res) {
  // console.log(req.params.sportName);
  Ground.find({sportName: req.params.sportName}, function(err,data){
    // console.log(err,data);
    if(err) res.json({success: false, error: err});
    else res.json({success: true, data: data});
  });
});
router.post('/grounds/create',function(req, res, next){
  Ground.create(req.body,function(err,ground){
    if(err) return next(err);
    res.json(ground);
  });
});
module.exports = router;
