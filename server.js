var express = require("express");
var login = require("./App/Routes/login-routes");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("app/public"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require("./App/Routes/api-routes")(app);
require("./App/Routes/html-routes")(app);
require("./App/Routes/login-routes")(app);

 var router = express.Router();
// router.post('/register', login.register);
// router.post('/login', login.login)
// app.use('/api', router);  //change to different address?

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

