var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
  console.log('message',req.session.message);
  var message=req.session.message;
  req.session.message=undefined;
  if(req.user){
    res.render('index', { user: req.user ,message: message});
  } else {
    res.render('index', { message: message});
  }
  console.log('message',req.session.message);
});
router.get('/api/messages/secured',function(req,res){
  if(req.user)
    res.json({message:"Yo welcome to the secret area",error:false});
  else {
    res.status(300);
    res.end('forbidden');
  }
});
router.get('/api/messages',function(req,res){
  res.json({message:"Please wait in line",error:false});
});
module.exports = router;
