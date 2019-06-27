var db = require('./connection.dao');
var Users = require('../middleware/user.schema');
async function findUser(name) {
    return await Users.findOne({username:name});
}
async function create(user) {    
    return await user.save();
}

async function getById(id) {
    return await Users.findById(id);
}
async function deleteById(id) {
    await Users.findByIdAndRemove(id);
}

module.exports = {
    Users,
    create,
    findUser,
    getById,
    deleteById
}