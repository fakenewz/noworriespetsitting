var db = require("../Models");
var passport = require("passport");

module.exports = function (app) {

  app.post("/signup", passport.authenticate("local-signup", {
    failureRedirect: "/signup"
  }),
    function (req, res) {
      console.log("here");
      res.redirect("/dashboard");

    });

  app.post("/signin", passport.authenticate("local-signin", {
    failureRedirect: "/signin"
  }),
    function (req, res) {
      console.log(req.session)
      console.log("bison");
      res.redirect("/dashboard");

    });

}
