var express = require('express');
var router = express.Router();
var admin = require('./../models/admin');

/* GET home page. */
router.get('/', function(req, res) {
	admin.get(res);
});

router.get('/settings', function(req, res) {
	res.render('settings');
});

router.post('/settings-process', function(req, res) {

	req.assert("email_limit", "Enter a Email Limit.");

	var errors = req.validationErrors();
	  if (errors) {
	  	res.send(errors);
	    // res.redirect('back',{flash_errors:errors});
	    return;
	  } else {

	  }

	
});


//The 404 Route (ALWAYS Keep this as the last route)
router.get('*', function(req, res){
  res.render('extra/404');
});


module.exports = router;
