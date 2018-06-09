var authController = require('../Controllers/authcontroller');
var path = require("path");
var db = require("../Models");

module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.get('/logout', authController.logout);

    function isLoggedIn(req, res, next) {
      if (req.isAuthenticated()) {
          return next();
      } else {
        console.log("didn't work")
        res.redirect('/signin')
      }
  }

     app.get('/dashboard', isLoggedIn, authController.dashboard)

     console.log("apple");

     db.AllUsers.findAll({
        where: {
          ownerorsitter: "sitter"
        }
      }).then(function(dbperson, res) {
        //   .then(function(dbPerson) {

        console.log("star")
        console.log("HERE!!!!!!", dbperson)
        res.json(dbperson);
      });
        
    }
