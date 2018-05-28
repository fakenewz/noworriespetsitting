var path = require("path");

// Routes
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/view.html"));
  });

  app.get("/addsitterinformation", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/survey_petsitter.html"));
  });

  app.get("/addownerinformation", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/survey_petowner.html"));
  });

  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/all.html"));
  });

};
