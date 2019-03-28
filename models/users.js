const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    userName : String,
    pastOrder1 : String,
    pastOrder2 : String,
    pastOrder3 : String
});

module.exports = mongoose.model('Users', userSchema);
