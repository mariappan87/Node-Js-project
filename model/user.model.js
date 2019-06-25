var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String },    
    firstName: { type: String },
    lastName: { type: String }
}, { versionKey: false });

module.exports = mongoose.model('Users', userSchema, "Users");