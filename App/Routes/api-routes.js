var db = require("../Models");

module.exports = function(app) {
console.log("banana");
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