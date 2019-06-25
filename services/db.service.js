/*const DAO = require('../dao/db.js');
var db;
async function getCollection(name) {
    db = await DAO.connectDB();
    console.log("DB connection successful", db);
    let collection = await db.collection(name);
    return collection;
}
*/
const DAO = require('../dao/db.js');

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