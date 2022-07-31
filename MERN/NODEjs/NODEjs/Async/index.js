const fs = require('fs');

// Create a file through Async

// fs.writeFile('read.txt',"Today is awsome day : ",
// (err) =>{
//    console.log("File is creted")
//    console.log(err);
// })

// we pass them a function as an argument - a callback - that gets called when taht task completes.
// The Callback has an argument that tells you whether the operation completed successfully
// now we need to say what to do when fs.writeFile has Completed(even if it's nothing), and start 
// checking for errors

fs.appendFile('read.txt',"\nPlz like and share and subs my channel",
(err) => {
  console.log("File  appended");
  console.log(err);
});


fs.readFile("read.txt","utf8",
(err, data) => {
  console.log(data);
})
