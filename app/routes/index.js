'use strict';

var path = process.cwd();
var RouteHandler = require(path + '/app/controllers/serverController.js');

module.exports = function (app, db) {

var routeHandler = new RouteHandler(db);
	app.route('/')
		.get(function(req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/about')
		.get(function (req, res) {
			res.sendFile(path + '/public/about.html');
		});

	app.route('/contact')
		.get(function (req, res) {
			res.sendFile(path + '/public/contact.html');
		});

	app.route('/api/searchTitles')
		.get(routeHandler.searchTitles);

	app.route('/api/getDetails')
		.get(routeHandler.getTitleDetails);

};
