
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("app/public"));


require("./App/Routes/api-routes")(app);
require("./App/Routes/html-routes")(app);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

