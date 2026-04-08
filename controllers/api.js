exports.api = async function(req, res) {
try{
theCostumes = await Costume.find();
res.send(theCostumes);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
}