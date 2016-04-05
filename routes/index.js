var express = require('express');
var router = express.Router();
var settings = require('./../models/settings');

/* GET home page. */
router.get('/', function(req, res) {
	settings.get(res);
});

router.get('/add-project', function(req, res) {
	res.render('add_project');
});

router.get('/settings', function(req, res) {
	settings.get_limit(res);
});

router.post('/settings-process', function(req, res) {

	req.assert('email_limit','Invalid Email Limit').notEmpty()
	   .isInt({ min: 0, max: 2000 }).withMessage('Email limit should be a number and less than 2000');

	var errors = req.validationErrors();
	  if (errors) {
	  	// res.send(errors);
	  	req.flash('flash_errors', errors)
	    res.redirect('/settings');
	    return;
	  }else{
		settings.update_limit(req,res);
	  }
});


//The 404 Route (ALWAYS Keep this as the last route)
router.get('*', function(req, res){
  res.render('extra/404');
});


module.exports = router;
