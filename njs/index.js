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
		// data = parseForeach(data, args)
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
		let rs = data.replace(reg, function (matchStr, scriptStr) {
			let outputHtml = "";
			function nhtml(htmlStr) {
				outputHtml += htmlStr;
			}
			eval(scriptStr)
			return outputHtml;
		});
		return rs;
	}

	function parseForeach(data, args) {
		// let foreach_reg = /<n-foreach\skey="(.*?)"\sitem="(.*?)">([\s\S]*)<\/n-foreach>/g
		var foreach_reg = /&lt;(?:(?:\/([^&gt;]+)&gt;)|(?:!--([\S|\s]*?)--&gt;)|(?:([^\s\/&lt;&gt;]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'&lt;&gt;])*)\/?&gt;))/g;
		// console.log(data)
		while (match = foreach_reg.exec(data)) {
		}
		let rs = data.replace(foreach_reg, function (matchStr, key, item, body) {
			// console.log(body)
			let item_reg = /<n-item\svalue="(.*)".*\/>/g
			let itemRs = body.replace(item_reg, function (matchStr, itemValue) {
				// console.log(itemValue)
				// parseArgStr(args, itemValue);

			})
			// console.log(matchStr)
			// console.log(key)
			// console.log(item)
			// console.log(body)
		});
	}

	function parseArgStr(targetObj, argsStr) {
		let argsObj = argsStr.split('.')
		let argRs = null;
		for (let i in argsObj) {
			argRs = targetObj[argsObj[i]]
		}
	}

	function getArgs() {

	}
	next();
}