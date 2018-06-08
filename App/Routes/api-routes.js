var db = require("../Models");

module.exports = function(app) {
  // app.get("/sitter/:petsitters?", function(req, res) {
  //   if (req.params.petsitters) {
  //     db.sitters.findOne({
  //       where: {
  //         routeName: req.params.petsitters
  //       }
  //     }).then(function(result) {
  //       return res.json(result);
  //     });
  //   }
  //   else {
  //     db.sitters.findAll({}).then(function(result) {
  //       return res.json(result);
  //     });
  //   }
  // });

  // app.get("/owner/:petowners?", function(req, res) {
  //   if (req.params.petowners) {
  //     db.owners.findOne({
  //       where: {
  //         routeName: req.params.petowners
  //       }
  //     }).then(function(result) {
  //       return res.json(result);
  //     });
  //   }
  //   else {
  //     db.owners.findAll({}).then(function(result) {
  //       return res.json(result);
  //     });
  //   }
  // });

  app.post("/api/petOwnerSurvey", function(req, res) {
    var ownerPet = req.body;
    
    console.log("now")
    console.log(db.OwnersPets)

    db.OwnersPets.create({
      nameOfpet: ownerPet.nameOfpet,
      typeOfpet: ownerPet.typeOfpet,
      AllUserId: req.session.passport.user 
    }).then(function(dbownerPet) {
        res.json(dbownerPet);
      });
  
      console.log("pasta")
    });  

 };
