var Users = require("../Models/logins")
var Sequelize = require("sequelize");
var sequelize = require("../Config/connectionsLogin")

exports.register = function(req,res) {
  
  console.log("here");

  var today = new Date();
  var loginNow = req.body;

  var sql = "INSERT INTO users (first_name, last_name, email, thepassword) VALUES ?";
  var users = {
      first_name: loginNow.first_name,
      last_name: loginNow.last_name,
      email: loginNow.email, 
      thepassword: loginNow.thepassword,
      created: today,
      modified: today,
    };
  
    sequelize.query(sql, users, function (error, results, fields) {

      if (error) {
        console.log("error ocurred", error);
        res.send({
          "code":400,
          "failed":"Error Ocurred"
        });
      } else {
        console.log('The solution is: ', results);
        res.send({
          "code":200,
          "success":"User registered sucessfully"
        });
      }
    });
  }

  exports.login = function(req,res) {
    var email = loginNow.email;
    var password = loginNow.thepassword;

    sequelize.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"Error Ocurred"
      });
    } else {
      if(results.length >0){
        if(results[0].thepassword == thepassword){
          res.send({
            "code":200,
            "success":"Login sucessful!"
              });
      }
      else {
        res.send({
          "code":204,
          "success":"Email and password do not match"
          });
        }
      }
      else{
        res.send({
          "code":204,
          "success":"Email does not exist"
            });
      }
    }
  });
}