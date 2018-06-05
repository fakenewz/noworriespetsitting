var express = require("express"); //
var bodyParser = require("body-parser"); //

var env = require('dotenv').load(); //
var exphbs = require('express-handlebars') //

var passport = require('passport'); //
var session = require('express-session'); //

var app = express(); //
var PORT = process.env.PORT || 8080;

var db = require("./App/Models") //

app.use(session({ secret: 'secret', resave: false, saveUninitialized: false})); // session secret
app.use(passport.initialize()); //
app.use(passport.session()); //


app.set('views', './App/views') //
app.engine('hbs', exphbs({ //
    extname: '.hbs' //
})); //
app.set('view engine', '.hbs'); //

var authRoute = require("./App/Routes/auth")(app, passport); //

require('./App/Config/passport/passport')(passport, db.users); //

app.use(bodyParser.urlencoded({ extended: true })); //
app.use(bodyParser.json()); //

app.use(express.static("app/public"));

require("./App/Routes/api-routes")(app);
require("./App/Routes/html-routes")(app);
require("./App/Routes/login-routes")(app);
require("./App/Routes/calendar-routes")(app);


db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
 });
});