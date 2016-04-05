var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'zumaka'
});



function settings(){

	this.get = function(res) {
      connection.query('select * from settings', function(err, result) {
        if (err) {
        	throw err;
        }
        res.render('index', { rows : result});
      });
  };

    this.update_limit = function(limit,res) {
      console.log("from settings "+limit);
      connection.query('UPDATE settings SET value="'+limit.body.email_limit+'" where param="email_limit"', function(err, result) {
        if (err) {
          throw err;
        }
        limit.flash('flash_success', 'Successfully Saved!')
        res.redirect('/settings');
      });
  };

    this.get_limit = function(res) {
      connection.query('select * from settings where param = "email_limit"', function(err, result) {
        if (err) {
          throw err;
        }
        res.render('settings', { limit : result});
      });
  };


}

module.exports = new settings();


