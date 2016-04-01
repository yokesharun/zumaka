var express = require('express');
var router = express.Router();
var admin = require('./../models/admin')


/* GET home page. */
router.get('/', function(req, res) {
	admin.get(res);
});

//The 404 Route (ALWAYS Keep this as the last route)
router.get('*', function(req, res){
  res.render('extra/404');
});


module.exports = router;
