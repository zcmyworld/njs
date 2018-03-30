
// let reg = /<njs\svalue=".*"\/>/
// data = 'sadf<njs value="saf"/>asdfa'
// console.log(data.match(reg))
// let reg = /<script\snjs="true">([\s\S]*)<\/script>/

// let reg = /&lt;hello&gt;&lt;\/hello&gt;/g
// let reg = /&lt;/g
let reg = /<tag>|<\/tag>/g
let data = '<tag><hello><tag>final</tag></hello></tag><tag><hello></hello></tag>'
// console.log(data)
// console.log(data.match(reg))
// console.log(reg.exec(data))
while(rs = reg.exec(data)) {
    console.log(reg.lastIndex)
    console.log(rs)
}