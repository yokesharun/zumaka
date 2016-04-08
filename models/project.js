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
    
    this.edit_project_process = function(req,res) {

      connection.query('update projects set project_name="'+req.body.project_name+'" where idprojects="'+req.body.project_id+'"', function(err, result) {
        if (err) {
          throw err;
        }
        req.flash('flash_success', 'Project Updates');
        res.redirect('/list-projects');
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
    
    this.edit_project = function(req,res) {
      connection.query('select * from projects where idprojects="'+req.params.id+'"', function(err, result) {
        if (err) {
          throw err;
        }
        res.render('edit_project', { project : result});
      });
  };
    
    this.delete_project = function(req,res) {
      connection.query('delete from projects where idprojects="'+req.params.id+'"', function(err, result) {
        if (err) {
          throw err;
        }
          req.flash('flash_success', 'Project Deleted!');
            res.redirect('/list-projects');
      });
  };

}

module.exports = new project();