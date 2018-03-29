
// let reg = /<njs\svalue=".*"\/>/
// data = 'sadf<njs value="saf"/>asdfa'
// console.log(data.match(reg))
let reg = /<script\snjs="true">([\s\S]*)<\/script>/

let data = '<script njs="true">he\nlloworld</script>'
console.log(data)
console.log(data.match(reg))