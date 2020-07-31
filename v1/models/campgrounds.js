var mongoose = require("mongoose");
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	location: String,
	comments: [
	{
	type: mongoose.Schema.Types.ObjectId,
	ref: "comment"
	}
	]
})

var Campground = mongoose.model("Campground",campgroundSchema);

module.exports = Campground;