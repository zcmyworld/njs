
let reg = /<njs\svalue=".*"\/>/
data = 'sadf<njs value="saf"/>asdfa'
console.log(data.match(reg))