var express = require("express");
var router = require("./routes/router");
var bodyParser = require("body-parser");
var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));
app.use(router);
app.use(function (err, req, res, next) {
	res.send(err.message);
})
app.listen(3000);