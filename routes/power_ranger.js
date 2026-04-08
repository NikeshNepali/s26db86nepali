var express = require('express');
const ranger_controllers= require('../controllers/rangers');
var router = express.Router();
/* GET rangers */
router.get('/', ranger_controllers.ranger_view_all_Page );
module.exports = router;