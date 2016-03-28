var express = require('express');
var router = express.Router();
var admin = require('./../models/admin')


/* GET home page. */
router.get('/', function(req, res) {
	admin.get(res);
});


module.exports = router;
