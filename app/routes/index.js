'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/serverController.js');

module.exports = function (app, db) {

var clickHandler = new ClickHandler(db);
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
		.get(clickHandler.searchTitles);

	app.route('/api/getDetails')
		.get(clickHandler.getTitleDetails);

};
