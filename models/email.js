var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'zumaka'
});



function email(){

      this.add_email = function(res) {
      connection.query('select * from projects', function(err, result) {
        if (err) {
          throw err;
        }
        res.render('add_email', { projects : result});
      });
  };

    this.add_email_process = function(req,res) {

      connection.query('insert into email_chunk (project_id,customer_name,customer_email) values ("'+req.body.project_id+','+req.body.customer_name+','+req.body.customer_email+'")', function(err, result) {
        if (err) {
          throw err;
        }
        req.flash('flash_success', req.body.customer_name+' Email Added')
        res.redirect('/add-email');
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

module.exports = new email();