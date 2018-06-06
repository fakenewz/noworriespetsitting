var db = require("../Models");

module.exports = function(app) {
  app.get("/sitter/:petsitters?", function(req, res) {
    if (req.params.petsitters) {
      db.sitters.findOne({
        where: {
          routeName: req.params.petsitters
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
    else {
      db.sitters.findAll({}).then(function(result) {
        return res.json(result);
      });
    }
  });

  app.get("/owner/:petowners?", function(req, res) {
    if (req.params.petowners) {
      db.owners.findOne({
        where: {
          routeName: req.params.petowners
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
    else {
      db.owners.findAll({}).then(function(result) {
        return res.json(result);
      });
    }
  });

  app.post("/api/newsitterinformation", function(req, res) {
    var petsit = req.body;
    var routeName = petsit.full_name.replace(/\s+/g, "").toLowerCase();

    console.log(db.dogSitters)

    db.dogSitters.create({
      routeName: routeName,
      full_name: petsit.full_name,
      city: petsit.city,
      email: petsit.email, 
      would_sit_dog: petsit.would_sit_dog,
    }).then(function(dbSittersDog) {
      
      db.catSitters.create({
        routeName: routeName,
        full_name: petsit.full_name,
        city: petsit.city,
        email: petsit.email, 
        would_sit_cat: petsit.would_sit_cat,
      }).then(function(dbSittersCat) {
        res.json(dbSittersCat);
      });
  
      console.log("pasta")

    });  
  });

  app.post("/api/newownerinformation", function(req, res) {
    var petowner = req.body;
    var routeName = petowner.fullname.replace(/\s+/g, "").toLowerCase();

    console.log(db.ownersCat)

    db.ownersCat.create({
      routeName: routeName,
      fullname: petowner.fullname,
      place: petowner.place,
      emailaddress: petowner.emailaddress, 
      hasDog: petowner.hasDog,
      hasCat: petowner.hasCat,
    }).then(function(dbOwnersCat) {
      
      db.ownersDog.create({
        routeName: routeName,
        fullname: petowner.fullname,
        place: petowner.place,
        emailaddress: petowner.emailaddress, 
        hasDog: petowner.hasDog,
        hasCat: petowner.hasCat,
      }).then(function(dbOwnersDog) {
        res.json(dbOwnersDog);
      });
      
    });

    console.log("spaghetti")

  });
};
