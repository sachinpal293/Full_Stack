const fs = require("fs")

// creating a new file
// fs.writeFileSync('read.txt',"Welcome to my Channel");

// fs.appendFileSync('read.txt'," CodingWithSachin");

const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);

// output : - <Buffer 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 43 68 61 6e 6e 65 6c 20 43 6f 64 69 6e 67 57 69 74 68 53 61 63 68 69 6e> 
// Node.js includes an additional data type called Buffer 
// (not available in browser's JavaScript)
// Buffer's is mainly used to store binary data,
// While reading from a file or reading packets over the network
org_data = buf_data.toString();
console.log(org_data);