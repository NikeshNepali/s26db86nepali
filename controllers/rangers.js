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
exports.ranger_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await rangers.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
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
exports.ranger_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await rangers.findById( req.params.id)
// Do updates of properties
if(req.body.rangerColor)
toUpdate.rangerColor = req.body.rangerColor;
if(req.body.rangerPower) toUpdate.rangerPower = req.body.rangerPower;
if(req.body.rangerStrength) toUpdate.rangerStrength = req.body.rangerStrength;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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

