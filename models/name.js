const mongoose = require('mongoose');

const nameSchema = mongoose.Schema({
    names: [String]
});

module.exports = mongoose.model('Name', nameSchema);