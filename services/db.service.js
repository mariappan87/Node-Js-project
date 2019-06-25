const DAO = require('../dao/user.dao.js');

module.exports = {
    getAll,
    getById,
    deleteById
}

async function getAll() {
    return await DAO.getAll();
}
async function getById(id) {
    return await DAO.getById(id);
}
async function deleteById(id) {
    await DAO.deleteById(id);
}