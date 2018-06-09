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

     app.get('/dashboard', isLoggedIn, function (req, res) {

     console.log("apple");
     var Sequelize = require('sequelize');
     const Op = Sequelize.Op

     db.AllUsers.findAll({
      where: {
        ownerorsitter: {
          [Op.ne]: 'owners'
        }
       }
      }).then(function(dbperson) {
        console.log("star")
        console.log("HERE!!!!!!", dbperson)
         res.json(dbperson);
      });
    //  res.render('dashboard');
    });
  }
