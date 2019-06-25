var db = require("../services/db.service.js");

function getAllUsers(req, res, next) {
    db.getAll('Users')
    .then((result) => {       
        console.log("Collection returned==========>", result);
        return result;
    })
    .catch(err=>next(err));
}

module.exports = {
    getUserCollection: getAllUsers
}