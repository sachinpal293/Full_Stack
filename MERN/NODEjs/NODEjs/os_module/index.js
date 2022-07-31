const os = require('os');

console.log(os.arch())
console.log(os.hostname())

const freememory = os.freemem();
console.log(`${freememory/1024/1024/1024}`);

const total = os.totalmem();
console.log(`${total/1024/1024/1024}`)

console.log(os.platform())
console.log(os.tmpdir())
console.log(os.type());
console.log(os.cpus())

