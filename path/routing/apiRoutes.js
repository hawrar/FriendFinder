var friendHub = require('../data/friends.js');
var path = require('path');

// The required routes for the get app for f
//ROUTING
//==============================================

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendHub);
	});

	app.post('/api/friends', function(req, res){
		friendHub.push(req.body);
	})
};