const fs = require('fs');
const path = require('path');
module.exports = function (req, res, next) {
	let njs = {};
	res.render = function (templateDir, args) {
		let templateData = fs.readFileSync(path.join('./', templateDir), 'utf8');
		for (let key in args) {
			njs[key] = args[key];
		}
		let data = parseNjsValue(templateData, args)
		data = parseNjsScript(data, args)
		res.send(data);
	}

	function parseNjsValue(data, args) {
		let njs_value_reg = /<njs\svalue="(.*)".*\/>/g
		let rs = data.replace(njs_value_reg, function (matchStr, matchKey, c, d) {
			let njsValue = matchKey;
			return args[njsValue]
		});
		return rs;
	}

	function parseNjsScript(data, args) {
		let reg = /<script\snjs="true">([\s\S]*?)<\/script>/g
		let rs = data.replace(reg, function (a, b, c, d) {
			let outputHtml = "";
			function nhtml(htmlStr) {
				outputHtml += htmlStr;
			}
			let script = b;
			eval(script)
			return outputHtml;
		});
		return rs;
	}
	next();
}