var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String, required:[true, 'Username should not be empty'] },    
    firstName: { type: String },
    lastName: { type: String },
    password: {type: String, required:[true, 'Password should not be empty'] }
}, { versionKey: false });

module.exports = mongoose.model('Users', userSchema, "Users");