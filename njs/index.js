const fs = require('fs');
const path = require('path');
module.exports = function (req, res, next) {
	res.render = function (templateDir, args) {
		let templateData = fs.readFileSync(path.join('./', templateDir), 'utf8');
		let data = getNjsTag(templateData, args)
		res.send(data);
	}
	next();
}

function getNjsTag(data, args) {
	let njs_value_reg = /<njs\svalue="(.*)".*\/>/g
	let rs = data.replace(njs_value_reg, function (a, b, c, d) {
		// console.log(a)//匹配的文本
		// console.log(b)//对应的变量
		// console.log(c)//位置
		let njsValue = b;
		return args[njsValue]
	});
	return rs;
}