var Sitters = require("../Models/sitters");

module.exports = function(app) {
  app.get("/api/:petsitters?", function(req, res) {
    if (req.params.petsitters) {
      Sitters.findOne({
        where: {
          routeName: req.params.petsitters
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
    else {
      Sitters.findAll({}).then(function(result) {
        return res.json(result);
      });
    }
  });

  app.post("/api/new", function(req, res) {
    var petsit = req.body;

    console.log("petsit" + petsit)

    var routeName = petsit.full_name;

    Sitters.create({
      routeName: routeName,
      fullname: petsit.full_name,
      city: petsit.city,
      email: petsit.email, 
      yearsexperience: petsit.years_of_experience,
      sitdog: petsit.would_sit_dog,
      sitcat: petsit.would_sit_cat,
      sitbird: petsit.would_sit_bird,
      sitsnake: petsit.would_sit_snake,
      addcomments: petsit.additional_comments,

    });
  });
};
