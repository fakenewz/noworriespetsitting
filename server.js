var express = require("express");
var bodyParser = require("body-parser");

var env = require('dotenv').load();
var exphbs = require('express-handlebars')

var passport = require('passport');
var session = require('express-session');

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./App/Models")

app.use(session({ secret: 'secret',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.set('9. Account', './App/Public/2. Pages/9. Account') //
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("app/public"));

require("./App/Routes/api-routes")(app);
require("./App/Routes/html-routes")(app);
require("./App/Routes/login-routes")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
 });
});
