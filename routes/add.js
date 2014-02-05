var data = require("../data.json");

exports.addFriend = function(req, res) {  
	var name = req.query.name;
	var desc = req.query.description;
	var imgurl = "http://lorempixel.com/400/400/people";
	var newFriend = { "name": name, "description": desc, "imageURL": imgurl};
	console.log(newFriend);
	data["friends"].push(newFriend);
	res.render('add');
 }