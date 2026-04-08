var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var ranger_controller = require('../controllers/rangers');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// RANGER ROUTES ///
// POST request for creating a Ranger.
router.post('/rangers', ranger_controller.ranger_create_post);
// DELETE request to delete Ranger.
router.delete('/rangers/:id', ranger_controller.ranger_delete);
// PUT request to update Ranger.
router.put('/rangers/:id', ranger_controller.ranger_update_put);
// GET request for one Ranger.
router.get('/rangers/:id', ranger_controller.ranger_detail);
// GET request for list of all Ranger items.
router.get('/rangers', ranger_controller.ranger_list);
module.exports = router;