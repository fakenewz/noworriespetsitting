var path = require("path");

// Routes
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/view.html"));
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/survey_petsitter.html"));
  });

  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/all.html"));
  });

};
