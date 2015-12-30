var express = require('express');
var router = express.Router();
var auth = require('./auth')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/api/messages/secured',auth.isAuth,function(req,res){
  res.json({message:"Yo welcome to the secret area",error:false});
})
router.get('/api/messages',function(req,res){
  res.json({message:"Please wait in line",error:false});
})
module.exports = router;
