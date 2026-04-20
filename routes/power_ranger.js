var express = require('express');
const ranger_controllers= require('../controllers/rangers');
var passport = require('passport');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET rangers */
router.get('/', ranger_controllers.ranger_view_all_Page );
router.get('/rangers/:id', ranger_controllers.ranger_detail);
router.put('/rangers/:id', ranger_controllers.ranger_update_put);

router.get('/detail', ranger_controllers.ranger_view_one_Page);
router.get('/create',secured, ranger_controllers.ranger_create_Page);
router.get('/update',secured, ranger_controllers.ranger_update_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
res.redirect('/');
});
router.get('/delete',secured, ranger_controllers.ranger_delete_Page);

module.exports = router;