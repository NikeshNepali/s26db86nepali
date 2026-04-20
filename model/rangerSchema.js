const mongoose = require('mongoose');
const rangerSchema = new mongoose.Schema({
    rangerColor : {
        type: String,
        min: [4, "There needs to be 4 minimun character."],
        max: [20, "Is that even a color. "]
    },
    rangerPower: {
        type: String,
        min: [10, "Weak needs to be more power."],
        max: [1000000, "That is over powered."]
    },
    rangerStrength: {
        type : Number,
        min : 10,
        max: 1000000
    }
});
module.exports = mongoose.model('Ranger', rangerSchema);