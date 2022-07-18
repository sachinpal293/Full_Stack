const fs = require('fs');

// This is Synchronise 
// data = fs.readFileSync('read.txt','utf8');
// console.log(data);
// console.log("This is last call!")


fs.readFile('read.txt', 'utf8', (err,data)=>{
    console.log(data);
});

console.log("This is last call")