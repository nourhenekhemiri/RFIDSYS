const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    type: {type: String, required: true , default: 'user'},
    status: {type: String,  required: true, default: 'pending'},
    image: {type: String, required: false},
    city: {type: String, required: false},
    job: {type: String, required: false},
    description: {type: String, required: false},
});

module.exports = mongoose.model('User', userSchema);