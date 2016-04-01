var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tv'
});



function admin(){
	this.get = function(res) {
      connection.query('select * from admins', function(err, result) {
        if (err) {
        	throw err;
        }
        res.render('index', { rows : result});
      });
  };
}

module.exports = new admin();


