var Users = require('../model/user.model');

async function getAll() {
    var a = await Users.find();
    return a;
}
async function getById(id) {
    return await Users.findById(id);
}
async function deleteById(id) {
    await Users.findByIdAndRemove(id);
}

module.exports = {
    getAll,
    getById,
    deleteById
}