
var petSitters = require("../Models/sitters");

module.exports = function(app) {
  app.get("/api/:petsitters?", function(req, res) {
    if (req.params.petsitters) {
      petSitters.findOne({
        where: {
          routeName: req.params.petsitters
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
    else {
      petSitters.findAll({}).then(function(result) {
        return res.json(result);
      });
    }
  });

  app.post("/api/new", function(req, res) {
    var sitter = req.body;

    // Create a routeName
    // Using a RegEx Pattern to remove spaces from character.name
    var routeName = sitter.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    petSitters.create({
      routeName: routeName,
      firstname: sitter.first_name,
      lastname: sitter.last_name,
      city: sitter.city,
      email: sitter.email, 
      yearsexperience: sitter.years_of_experience,
      sitdog: sitter.would_sit_dog,
      sitcat: sitter.would_sit_cat,
      sitbird: sitter.would_sit_bird,
      sitsnake: sitter.would_sit_snake,
      addcomments: sitter.additional_comments,

    });
  });
};
