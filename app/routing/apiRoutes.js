// LOAD DATA

var friendsData = require("../data/friends");


// ROUTING

module.exports = function(app){
	app.get("/api/survey", function(req, res){
		res.json(friendsData);
	});
}

