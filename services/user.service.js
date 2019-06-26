const DAO = require('../dao/user.dao.js');

module.exports = {
    authenticate,
    create,
    getById,
    deleteById
}

async function authenticate(data) {
    var existingUser = await DAO.findUser(data.username);
    if(existingUser) {
        if(existingUser.password===data.password) {
            return {                
                data: existingUser
            }
        } else {
            return {
                error: "Password is incorrect"
            }
        }
    } else {        
        return {
            error: `Username ${data.username} is not registered`
        }
    }   
}

async function create(user) {
    return await DAO.create(user);
}

async function getById(id) {
    return await DAO.getById(id);
}
async function deleteById(id) {
    await DAO.deleteById(id);
}