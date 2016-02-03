var express = require('express');
var router = express.Router();

router.get('/grounds/:sportName', function(req, res) {
  console.log(req.params.sportName);
  res.json([
    {
      name: "ABCD grounds",
      location: "Nungambakkam"
    },
    {
      name: "Linguswamy Stadium",
      location: "Meenambakkam"
    },
    {
      name: "YMCA grounds",
      location: "Kilpauk"
    }
  ]);
});

module.exports = router;
