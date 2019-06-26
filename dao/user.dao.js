var db = require('./connection.dao');
var Users = require('../model/user.model');
async function findUser(name) {
    return await Users.findOne({username:name});
}
async function create(user) {
    let userObj = new Users(user);
    return await userObj.save();
}


async function getById(id) {
    return await Users.findById(id);
}
async function deleteById(id) {
    await Users.findByIdAndRemove(id);
}

module.exports = {
    create,
    findUser,
    getById,
    deleteById
}