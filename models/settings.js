var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'zumaka',
  multipleStatements: true,
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
      connection.query('UPDATE settings SET value="'+limit.body.email_limit+'" where idsettings="1" ; UPDATE settings SET value="'+limit.body.email+'" where idsettings="2" ; UPDATE settings SET value="'+limit.body.email_password+'" where idsettings="3"; ', function(err, result) {
        if (err) {
          throw err;
        }
        limit.flash('flash_success', 'Successfully Saved!')
        res.redirect('/settings');
      });
  };

    this.get_limit = function(res) {
      connection.query('select * from settings', function(err, result) {
        if (err) {
          throw err;
        }
        res.render('settings', { limit : result});
      });
  };


}

module.exports = new settings();


