var path = require("path");

// Routes
module.exports = function(app) {

  app.get("/addsitterinformation", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/survey_petsitter.html"));
  });

  app.get("/addownerinformation", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/survey_petowner.html"));
  });

  app.get("/appointments", function(req, res) {
    res.sendFile(path.join(__dirname, "../calendar/calendar.html"));
  });

  app.get("/signup", function(req, res) {
    res.render(path.join(__dirname, "../views/signup.hbs"),{});
  });

  app.get("/signin", function(req, res) {
    res.render(path.join(__dirname, "../views/signin.hbs"),{});
  });

  app.get("/dashboard", function(req, res) {
    res.render(path.join(__dirname, "../views/dashboard.hbs"),{});
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });

};
