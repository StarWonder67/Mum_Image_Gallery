var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");
var data = [
	{
		name: "Cloud's nest",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBe-BrfrXaf-3F0YjaPzB8sMnaIhINDd1GvQsY3fX7QFn-_SYvow&s",
		location: "Paris"
	},
	{
		name: "fest",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPaFOBebYYoiB1cTljRdawT7cTJgURHr9NPYi9RNuGTY9zusNvxQ&s",
		location: "Paris"
	},
	{
		name: "zest",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBe-BrfrXaf-3F0YjaPzB8sMnaIhINDd1GvQsY3fX7QFn-_SYvow&s",
		location: "Paris"
	},
]


function seedDB(){

//remove all existing campgrounds
Campground.remove({},function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("all campgrounds removed");
		//create new campground
	data.forEach(function(seed){
		Campground.create(seed,function(err,campground){
			if(err){
				console.log(err);
			}
			else{
				console.log("campground created");

				//add a comment
				Comment.create({
					text: "I loved this campsite",
					author: "Muskan"
				},function(err,comment){

					if(err){
						console.log(err);
					}
					else{
					campground.comments.push(comment);
					campground.save();	
					console.log("new comment added");
					}
					
				});
			}

		});

	});
	}
});



}


module.exports = seedDB;