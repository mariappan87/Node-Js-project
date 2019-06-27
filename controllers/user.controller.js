var userService = require("../services/user.service.js");

function authenticate(req, res, next) {
    userService.authenticate(req.body)
    .then((result) => {
        if(result.data) {
            res.render("home",{message:result.data});
        } else {
            res.render("index",{error:result.error});
        }        
    })
    .catch(err=>next(err));
}

function createUser(req, res, next) {
    userService.create(req.body)
    .then((result) => {
        if(result.error) {
            res.render("index",{error:result.error});  
        } else {
            res.render("home",{message:result}); 
        }
                 
    })
    .catch(err=> {
        res.render("error", {message:err.message, error:err});
    });
}

module.exports = {
    authenticate,
    createUser
}