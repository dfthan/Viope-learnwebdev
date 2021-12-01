var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarSchema = new Schema({
        brand: String, 
        model: String,
        color: String,
        year: Number
    }
);

module.exports = mongoose.model('Car', CarSchema);