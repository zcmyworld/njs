const fs = require('fs');
const path = require('path');
module.exports = function (req, res, next) {
	res.render = function (templateDir, args) {
		let templateData = fs.readFileSync(path.join('./', templateDir), 'utf8');
		getNjsTag(templateData)
		res.send(templateData);
	}
	next();
}

function getNjsTag(data) {
	let reg = /<njs\svalue=".*"\/>/
	let rs = data.replace(reg, function (a, b, c, d) {
		console.log(a)
		console.log(b)
		console.log(c)
		console.log(d)
		return 'helloworld'

	});
	console.log(rs)
}