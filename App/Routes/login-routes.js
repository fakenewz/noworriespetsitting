var Users = require("../Models/logins")
var Sequelize = require("sequelize");
var sequelize = require("../Config/connections")

module.exports = function(app) {
  app.post("/auth/login", function(req, res) {

  console.log("here");

  var today = new Date();
  var loginNow = req.body;

  Users.create({
      email: loginNow.email, 
      thepassword: loginNow.thepassword,
      created: today,
      modified: today,
    });
   });
  };

//   exports.login = function(req,res) {
//     var email = loginNow.email;
//     var password = loginNow.thepassword;

//     sequelize.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
//     if (error) {
//       res.send({
//         "code":400,
//         "failed":"Error Ocurred"
//       });
//     } else {
//       if(results.length >0){
//         if(results[0].password == password){
//           res.send({
//             "code":200,
//             "success":"Login sucessful!"
//               });
//       }
//       else {
//         res.send({
//           "code":204,
//           "success":"Email and password do not match"
//           });
//         }
//       }
//       else{
//         res.send({
//           "code":204,
//           "success":"Email does not exist"
//             });
//       }
//     }
//   });
// }