let express = require('express');
let router = express.Router();
let Users = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', function(req, res, next) {  
  Users.authenticate(req, res, next);
})
router.post('/create', function(req, res, next) {  
  Users.createUser(req, res, next);
})
module.exports = router;