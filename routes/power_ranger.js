var express = require('express');
const ranger_controllers= require('../controllers/rangers');
var router = express.Router();
/* GET rangers */
router.get('/', ranger_controllers.ranger_view_all_Page );
router.get('/rangers/:id', ranger_controllers.ranger_detail);
router.put('/rangers/:id', ranger_controllers.ranger_update_put);

router.get('/detail', ranger_controllers.ranger_view_one_Page);
module.exports = router;