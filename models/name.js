const mongoose = require('mongoose');

const nameSchema = mongoose.Schema({
    list: [String]
});

module.exports = mongoose.model('Name', nameSchema);