var express = require('express');
var router = express.Router();
var settings = require('./../models/settings');
var project = require('./../models/project');

/* GET home page. */
router.get('/', function(req, res) {
	settings.get(res);
});

router.get('/add-project', function(req, res) {
	res.render('add_project');
});


router.get('/list-projects', function(req, res) {
	project.list_project(req,res);
});

router.get('/edit-project/:id', function(req, res) {
	project.edit_project(req,res);
});


router.get('/settings', function(req, res) {
	settings.get_limit(res);
});

router.post('/settings-process', function(req, res) {

	req.assert('email_limit','Invalid Email Limit').notEmpty()
	   .isInt({ min: 0, max: 2000 }).withMessage('Email limit should be a number and less than 2000');
    req.assert('email','Enter the Email').notEmpty();
    req.assert('email', 'valid email required').isEmail();
    req.assert('email_password','Enter the Email Password').notEmpty();

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

router.post('/add-project-process', function(req, res) {

	req.assert('project_name','Enter the Project Name').notEmpty();

	var errors = req.validationErrors();
	  if (errors) {
	  	// res.send(errors);
	  	req.flash('flash_errors', errors)
	    res.redirect('/add-project');
	    return;
	  }else{
		project.add_project(req,res);
	  }
});


router.post('/edit-project-process', function(req, res) {

	req.assert('project_name','Enter the Project Name').notEmpty();

	var errors = req.validationErrors();
	  if (errors) {
	  	// res.send(errors);
	  	req.flash('flash_errors', errors)
	    res.redirect('/edit-project');
	    return;
	  }else{
		project.edit_project_process(req,res);
	  }
});


//The 404 Route (ALWAYS Keep this as the last route)
router.get('*', function(req, res){
  res.render('extra/404');
});


module.exports = router;
