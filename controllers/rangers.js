var rangers = require('../model/rangerSchema');
// List of all Rangers
exports.ranger_list = async function(req, res) {
try{
const theRangers = await rangers.find();
res.send(theRangers);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// for a specific Ranger.
exports.ranger_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Ranger detail: ' + req.params.id);
};

// Handle Ranger create on POST.
exports.ranger_create_post = async function(req, res) {
console.log(req.body)
let document = new rangers();
document.rangerColor = req.body.rangerColor;
document.rangerPower = req.body.rangerPower;
document.rangerStrength = req.body.rangerStrength;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle Ranger delete from on DELETE.
exports.ranger_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Ranger delete DELETE ' + req.params.id);
};
// Handle Ranger update form on PUT.
exports.ranger_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Ranger update PUT' + req.params.id);
};

exports.ranger_view_all_Page = async function(req, res) {
try{
const theRangers = await rangers.find();
res.render('power_ranger', { title: 'Ranger Search Results', results: theRangers });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

