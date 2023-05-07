const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    lastName:String,
    ci:String,
    email:String,
    direction:String,
    zone:String,
    number:String
});

module.exports = userSchema;
