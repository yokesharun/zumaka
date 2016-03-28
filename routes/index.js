var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tv'
});

/* GET home page. */
router.get('/', function(req, res, next) {

	connection.query('SELECT * from admins', function(err, rows, fields) {
  if (err) throw err;

    //test

  res.render('index', { layout: 'layout', rows : rows});
    

});

});

module.exports = router;
