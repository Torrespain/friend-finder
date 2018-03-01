// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS CONFIGURATION
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./app/public'));

// ROUTER
// require("./routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});