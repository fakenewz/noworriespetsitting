var path = require("path");

// Routes
module.exports = function(app) {

  app.get("/addsitterinformation", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/survey_petsitter.html"));
  });

  app.get("/addownerinformation", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/survey_petowner.html"));
  });

  //app.get("/appointments", function(req, res) {
   // res.sendFile(path.join(__dirname, "../calendar/calendar.html"));
 // });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/signup.html"),{});
  });

  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/signin.html"),{});
  });

  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/dashboard.html"),{});
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/PetSitter-HTML-Working w_ tags/HTML/index.html"));
  });

};
