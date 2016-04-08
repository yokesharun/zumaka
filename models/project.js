var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'zumaka'
});



function project(){

    this.add_project = function(req,res) {

      connection.query('insert into projects (project_name) values ("'+req.body.project_name+'")', function(err, result) {
        if (err) {
          throw err;
        }
        req.flash('flash_success', 'A New Project Added')
        res.redirect('/add-project');
      });

  };
    
    this.list_project = function(req,res) {
      connection.query('select * from projects', function(err, result) {
        if (err) {
          throw err;
        }
        res.render('list_projects', { projects : result});
      });
  };

}

module.exports = new project();