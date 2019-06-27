const DAO = require('../dao/user.dao.js');
const bcrypt = require('bcryptjs');

module.exports = {
    authenticate,
    create,
    getById,
    deleteById
}

async function authenticate(data) {
    var existingUser = await DAO.findUser(data.username);
    if(existingUser) {
        if(bcrypt.compareSync(data.password,existingUser.password)) {
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
    var existingUser = await DAO.findUser(user.username);
    if(existingUser) {
        return {
            error: `Username ${user.username} is already registered`
        }
    } else {
        let userObj = new DAO.Users(user);
        let error = userObj.validateSync();
        console.log("error====>", error);
        if(error) {
            throw error;
        }
        userObj.password = bcrypt.hashSync(user.password,10);
        return await DAO.create(userObj);
    }    
}

async function getById(id) {
    return await DAO.getById(id);
}
async function deleteById(id) {
    await DAO.deleteById(id);
}