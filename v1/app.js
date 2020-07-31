var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var seedDB = require("./seeds");
var Comment = require("./models/comment");

seedDB();      
mongoose.connect("mongodb://localhost/yelp_camp");

// Campground.create(
// 	{name: "Billy's home", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
	

// 	function(err,campground){
// 	if(err){
// 		console.log(err);

// 	}
// 	else{
// 		console.log("newly created campground");
// 		console.log(campground);  
// 	}
// }


// );


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("landing");
});

 // var campgrounds = [
 // 	{name: "Abra cadabra", image: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
 // 	{name: "Billy's home", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
 // 	{name: "Creeky hill", image: "https://images.unsplash.com/photo-1545153996-e01b50d6ec38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},


 // ]

app.get("/index",function(req,res){

Campground.find({},function(err,allCampgrounds){
	if(err){
		console.log(err);
	}
	else{
		res.render("index",{campgrounds:allCampgrounds});
	}
});

 
});


app.post("/index",function(req,res){
	//get data from form and add to campgrounds schema
var name = req.body.name;
var image = req.body.image;
var location=req.body.location;
var newCampground = {name : name, image: image,location: location}; //object of new capmground

// campgrounds.push(newCampground);
//saving object from form to db
Campground.create(newCampground,function(err,campground){
	if(err){
		console.log(err);
	}
	else{
		//redirect back to campgrounds page
		res.redirect("/index");  
	}
});



	//get form data and add to campgrounds array/database
	
});

app.get("/campgrounds/new", function(req,res){
	res.render("new");
})


//order of route is important 
//shows more ifo abt one campground
app.get("/campgrounds/:id",function(req,res){

	Campground.findById(req.params.id,function(err,foundCampground){
		if(err){
			console.log(err);
		}
		else{
			console.log(foundCampground);
			res.render("show",{campground: foundCampground})
		}

	});
	

});

app.listen(3000,function(){
	console.log("s i r");
});