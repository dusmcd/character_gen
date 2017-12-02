const mongoose = require('mongoose');

const traitSchema = mongoose.Schema({
    positiveTraits: [String],
    negativeTraits: [String],
    characterTypes: [String]
});

module.exports = mongoose.model('Trait', traitSchema);