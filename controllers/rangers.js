var rangers = require('../model/rangerSchema');
// List of all Rangers
exports.ranger_list = function(req, res) {
res.send('NOT IMPLEMENTED: Ranger list');
};
// for a specific Ranger.
exports.ranger_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Ranger detail: ' + req.params.id);
};
// Handle Ranger create on POST.
exports.ranger_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Ranger create POST');
};
// Handle Ranger delete from on DELETE.
exports.ranger_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Ranger delete DELETE ' + req.params.id);
};
// Handle Ranger update form on PUT.
exports.ranger_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Ranger update PUT' + req.params.id);
};