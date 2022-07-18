const fs = require('fs');

// To Create a Directory
// fs.mkdirSync("Jarves");

// create a file and put a data in it.
// fs.writeFileSync("Jarves/bio.txt","My name is Sachin Kumar Pal");
// fs.appendFileSync("Jarves/bio.txt","\nI am a Software Engineer");

// Read data without getting a buffer data

// const data = fs.readFileSync("Jarves/bio.txt","utf8");
// console.log(data);

// rename the file name
// fs.renameSync("Jarves/bio.txt","Jarves/MyBio.txt");

//Delete the data 
// fs.unlinkSync("Jarves/MyBio.txt");

fs.rmdirSync("Jarves")
