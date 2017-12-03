const mongoose = require('mongoose');

const traitSchema = mongoose.Schema({
    description: String,
    list: [String]
});

module.exports = mongoose.model('Trait', traitSchema);