const mongoose = require('mongoose')

const kittySchema = new mongoose.Schema({
    id: Number,
    name: String
});

var kitty = mongoose.model('kitty', kittySchema)


module.exports = kitty
