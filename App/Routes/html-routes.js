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
<<<<<<< HEAD
    res.render(path.join(__dirname, "../views/PetSitter-HTML-Working w_ tags/HTML/Sign Up.html"),{});
  });

  app.get("/signin", function(req, res) {
    res.render(path.join(__dirname, "../views/PetSitter-HTML-Working w_ tags/HTML/SignIn.html"),{});
  });

  app.get("/dashboard", function(req, res) {
    res.render(path.join(__dirname, "../views/PetSitter-HTML-Working w_ tags/HTML/dashboard.html"),{});
=======
    res.sendFile(path.join(__dirname, "../views/signup.html"),{});
  });

  app.get("/signin", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/signin.html"),{});
  });

  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/dashboard.html"),{});
>>>>>>> d5484dba755da76506f0f149848e894981e25a3e
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/PetSitter-HTML-Working w_ tags/HTML/index.html"));
  });

};
