var express = require('express');
var app = express();

var njs = require('./njs');

app.use(njs)

app.get('/', function (req, res) {
	res.render('./template.html', {
		title: 'Hello Njs!',
		description: 'A casual template engine',
		users: [{
			name: 'Itgo'
		}, {
			name: 'zhicong'
		}]
	});
});


if (module.parent) {
	module.exports = app;
} else {
	app.listen(3003);
}