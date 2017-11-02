//The dependencies needed for this homework



var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// The Express app

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Required routes


require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


// Port for the server


app.listen(process.env.PORT || 3000, function(){
	console.log('App listening on PORT ' + process.env.PORT);
});