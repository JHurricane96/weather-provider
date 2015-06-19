var MongoClient = require("mongodb").MongoClient;
var path = require("path");

function checkDB(coll, query, callback) {
	MongoClient.connect("mongodb://localhost:27017/weatherProvider", function (err, db) {
		var collection = db.collection(coll);
		if (err) {
			callback(err);
			return;
		}
		collection.findOne({"name": query}, function (err, data) {
			if (err) {
				callback(err);
				return;
			}
			else if (!data) {
				callback(new Error("No entry exists!"));
				return;
			}
			else {
				callback("", data);
			}
		});
	});
	return;
}

module.exports = checkDB;