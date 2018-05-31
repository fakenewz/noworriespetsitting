var path = require("path");

// Routes
module.exports = function(app) {

  app.get("/addsitterinformation", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/survey_petsitter.html"));
  });

  app.get("/addownerinformation", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/survey_petowner.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/2. Pages/9. Account/login.html"));
  });

  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/all.html"));
  });

};
