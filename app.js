var express = require('express');
var app = express();

var njs = require('./njs');

app.use(njs)

app.get('/', function (req, res) {
	res.render('./template.html', {
		title: 'hello, njs!'
	});
});

var server = app.listen(3000, function () {
	console.log('Example app listening at http://%s:%s');
});