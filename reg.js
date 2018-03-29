
// let reg = /<njs\svalue=".*"\/>/
// data = 'sadf<njs value="saf"/>asdfa'
// console.log(data.match(reg))
// let reg = /<script\snjs="true">([\s\S]*)<\/script>/

let reg = /<n-foreach\skey="(.*?)"\sitem="(.*?)">([\s\S]*?)<\/n-foreach>/g
let data = '<n-foreach key="hello" item="hello">he\nlloworld</n-foreach>'
console.log(data)
console.log(data.match(reg))