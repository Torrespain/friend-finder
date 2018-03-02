// LOAD DATA

var friendsData = require("../data/friends");
var newFriend={};
var bestMatch={};
var counter=0;
var asignedNum=0;
// console.log(friendsData)
// ROUTING

// console.log(friendsData[0])

module.exports = function(app){
	// app.get("/api/survey", function(req, res){
	// 	res.json(friendsData);
	// 	console.log("line16")

	// });

	app.post("/api/newfriend", function (req,res){
		// console.log("APIRoutes", req.body);
		// res.json(req.body);

		newFriend=req.body;
		console.log(newFriend)

		res.json(findFriend(newFriend, friendsData))
		
	});

	app.get("/api/friends", function(req, res) {
    	res.json(tableData);
  	});

	 app.post("/api/tables", function(req, res) {

	 	console.log(res.body);
	  });

}

function findFriend(customer, asigned){
	for (var i = 0; i < asigned.length; i++) {
		counter=0;
		for (var j = 0; j < asigned[i]['score[]'].length; j++) {
			counter=counter+Math.abs(customer['score[]'][j]-asigned[i]['score[]'][j]);
		}
		if (i===0) {
			bestMatch=asigned[i];
			asignedNum=counter;
		}
		else if(counter<asignedNum){
			bestMatch=asigned[i];
			asignedNum=counter;
		}
	}
	return(bestMatch);
}





// module.exports = function(app){
// 	app.get("/api/survey", function(req, res){
// 		res.json(friendsData);
// 	});


// 	app.post("/api/newfriend", function (req,res){
// 		console.log("APIRoutes", req.body);
		
// 		var match = compare(newperson,friendsData)
// 		var newFriend = friendsData
		
// 		newFriend=req.body;
// 		newfriend.totalScore = computeScore(newperson);
// 		match = compare(newFriend,friendsData)

// 		res.json(match);
// 	});

	

// }

// function compare(newperson,people){
// 	var bestmatchNum;
// 	var bestPerson;

// }
// function computeScore(newperson){
// 	//loop through their key of score and add it up
// 	//return total after loop
// }




