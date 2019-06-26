var userService = require("../services/user.service.js");

function authenticate(req, res, next) {
    userService.authenticate(req.body)
    .then((result) => {
        if(result.data) {
            res.render("home",{message:result.data});
        } else {
            res.render("index",{error:result.error})
        }        
    })
    .catch(err=>next(err));
}

function createUser(req, res, next) {
    userService.create(req.body)
    .then((result) => {  
        console.log("===>",result)     
        res.render("home");
    })
    .catch(err=>next(err));
}

module.exports = {
    authenticate,
    createUser
}