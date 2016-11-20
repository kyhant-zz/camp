var express = require('express');
var app = express();

var campgrounds = [
	{name: "Salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
	{name: "Camp Cody", image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"},
	{name: "Pyramid Peak", image: "https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg"},
	{name: "Lake Tahoe", image: "https://farm8.staticflickr.com/7042/7121867321_65b5f46ef1.jpg"}
];

app.set("view engine", "ejs");

app.get('/', function(req, res) {
	res.render('landing');
})

app.get('/campgrounds', function(req, res){
	res.render('campgrounds', {campgrounds: campgrounds});
})

app.listen(3000, function(){
	console.log("server running at localhost:3000");
})

