var express = require('express');
var app = express();

var njs = require('./njs');

app.use(njs)

app.get('/', function (req, res) {
	res.render('./template.html', {
		title: 'Hello Njs!',
		description: 'A casual template engine',
		users: [{
			name: 'Itgo',
			age: 10,
			friends: [],
			books: ['book1', 'book2']
		}, {
			name: 'zhicong',
			age: 20,
			friends: [{
				name: 'Itgo'
			}],
			books: []
		}]
	});
});


if (module.parent) {
	module.exports = app;
} else {
	app.listen(3003);
}