const mongoose = require('mongoose');
const URL = require('../config/config.json').connectionString;
let userModel = require('./user.model.js');

mongoose.connect(process.env.MONGODB_URI || URL, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: userModel,
    getAll,
    getById,
    deleteById
}

async function getAll() {
    return await userModel.find();
}
async function getById(id) {
    return await userModel.findById(id);
}
async function deleteById(id) {
    await userModel.findByIdAndRemove(id);
}