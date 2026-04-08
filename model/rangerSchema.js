const mongoose = require('mongoose');
const rangerSchema = new mongoose.Schema({
    rangerColor : String,
    rangerPower: String,
    rangerStrength: Number
});
module.exports = mongoose.model('Ranger', rangerSchema);