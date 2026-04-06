var express = require('express');
var router = express.Router();

/* GET power_ranger class. */
router.get('/', function(req, res, next) {
  res.render('power_ranger', { title: 'Power Ranger' });
});

module.exports = router;
