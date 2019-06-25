let express = require('express');
let router = express.Router();
let db = require('../controllers/db.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.getUserCollection(req, res, next);
  res.render('index', { title: 'Immigration Portal' });
});

module.exports = router;
