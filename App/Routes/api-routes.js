var Sitters = require("../Models/sitters");
var Owners = require("../Models/owner");

module.exports = function(app) {
  app.get("/sitter/:petsitters?", function(req, res) {
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

  app.get("/owner/:petowners?", function(req, res) {
    if (req.params.petowners) {
      Owners.findOne({
        where: {
          routeName: req.params.petowners
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
    else {
      Owners.findAll({}).then(function(result) {
        return res.json(result);
      });
    }
  });

  app.post("/api/newsitterinformation", function(req, res) {
    var petsit = req.body;

    console.log("petsit " + petsit)

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

  app.post("/api/newownerinformation", function(req, res) {
    var petowner = req.body;

    console.log("petowner" + petowner)

    var routeName = petowner.fullname.replace(/\s+/g, "").toLowerCase();

    Owners.create({
      routeName: routeName,
      fullname: petowner.fullname,
      place: petowner.place,
      emailaddress: petowner.emailaddress, 
      hasDog: petowner.hasDog,
      hasCat: petowner.hasCat,
      hasBird: petowner.hasBird,
      hasSnake: petowner.hasSnake,
      moreInformation: petowner.moreInformation,
    });
  });

};
