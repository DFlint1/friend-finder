//apiroutes.js
//This is a get route with url/api/friends to display a json of all possible friends
//This links routes to all data sources

var friendData = require ('../data/friends.js');
var path = require('path');


//Routes
//==========================================================
module.exports = function(app){
	app.get('/api/friends', function(req,res){
	rest.json(friendData);
	})

	app.post('/api/friends', function(req, res){
		var lowestDifferenceInt = 50;
		var chosenMatch;
		friendData.forEach(function(storedUserObject){
			var difference = 0;
			for(i=0;i<storedUserObject.friendScores.length;i++){
				difference+=Math.abs(storedUserObject.friendScores[i] - req.body.friendScores[i]);
			} if(difference<lowestDifferenceInt){
				lowestDifferenceInt = difference;
				chosenMatch = storedUserObject;
			}
		});

		res.json(chosenMatch);
		friendData.push(req.body);
		app.post('/api/clear', function(req, res){
		// Empty out the array of data
		friendData = [];

		console.log(friendData);
	})
}