const fs = require('fs');
const bioData = {
    name : "Sachin",
    age:21,
    occupation:"Student",
};

// console.log(bioData.name);


// console.log(jsonData);
// 
// const objdata = JSON.parse(jsonData);
// console.log(objdata);
const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json',jsonData, (err)=>{
    console.log("Done");
})

fs.readFile("json1.json","utf-8",(err, data)=>{
//   console.log(data)
const orgdata = JSON.parse(data);
console.log(orgdata);
})