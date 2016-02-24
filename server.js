'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongo = require('mongodb').MongoClient;
var port = process.env.PORT || 3000;

var app = express();

mongo.connect('mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge', function (err, db) {

	if (err) {
		throw new Error('Database failed to connect!');
	} else {
		console.log('MongoDB successfully connected to remote db.');

		app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
		app.use('/public', express.static(process.cwd() + '/public'));

		routes(app, db);

		app.listen(port, function () {
			console.log('Node.js listening on port ' + port + '...');
		});
	}

});
