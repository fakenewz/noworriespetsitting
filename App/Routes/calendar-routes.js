var db = require("../Models");

module.exports = function(app) {

  app.get('/test', function(req, res) { //test code
    db.appointments.find({ 
        text: "Test event", 
        start_date: new Date(2018,8,1),
        end_date:   new Date(2018,8,5)
    }).then(function(testData) {
         res.send("This worked")
    });
});

// app.post('/test', function(req, res) { //test code
//   db.appointments.create({ 
//       text: "Test event", 
//       start_date: new Date(2018,8,1),
//       end_date:   new Date(2018,8,5)
//   }).then(function(testData) {
//         res.json(testData);
//   });
// });

  app.get("/sitter/:calendar?", function(req, res) {
      db.appointments.findAll({}).then(function(result) {
        return res.json(result);
      });
  });

  // app.post("/api/sittercalendar", function(req, res) {

  //   console.log("Calendar")

  //   db.appointments.create({
  //     start_date: req.body.start_date,
  //     end_date: req.body.end_date,
  //     description: req.body.description,
  //   }).then(function(dbAppt) {
  //     res.json(dbAppt);
  //   });
  // });

};
