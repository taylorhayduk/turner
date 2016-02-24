'use strict';

function ClickHandler (db) {
	var clicks = db.collection('Titles');

	this.searchTitles = function(req, res) {
		clicks.find( {TitleName: { $regex: ".*" + req.query.title + ".*", $options: "i" } }).toArray( function (err, result) {
			if (err) {
				throw err;
			}

			if (result.length > 0) {
				res.send(result);
			} else {
				res.send([])
			}
		});
	};

	this.getTitleDetails = function(req, res) {
		clicks.find( {_id: req.query.id}).toArray( function(err, result) {
			if (err) {
				throw err;
			}

			res.send(result);
		});
	};

}

module.exports = ClickHandler;
