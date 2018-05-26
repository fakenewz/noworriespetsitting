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

    var routeName = petsit.full_name.replace(/\s+/g, "").toLowerCase();

    Sitters.create({
      routeName: routeName,
      full_name: petsit.full_name,
      city: petsit.city,
      email: petsit.email, 
      years_of_experience: petsit.years_of_experience,
      would_sit_dog: petsit.would_sit_dog,
      would_sit_cat: petsit.would_sit_cat,
      would_sit_bird: petsit.would_sit_bird,
      would_sit_snake: petsit.would_sit_snake,
      additional_comments: petsit.additional_comments,

    });
  });
};
