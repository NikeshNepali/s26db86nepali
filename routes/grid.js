var express = require('express');
var router = express.Router();

/* GET grid page. */
router.get('/', function(req, res) {
  let query = req.query
  console.log(`rows ${query.rows}`)
  console.log(`cols ${query.cols}`)
  res.render('grid', { title: "Make a Grid", query: query });
});

module.exports = router;
