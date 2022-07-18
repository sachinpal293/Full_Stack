const fs = require('fs');

// fs.mkdir("Jarves",(err)=>{
//     console.log("Directory has created !")
//     console.log(err);
// })
// string = "Hello this is sachin "
// fs.writeFile("Jarves/data.txt", string,(err) =>{
//     console.log("File is created");
// })

// fs.appendFile("Jarves/data.txt","\n I am a softare engineer\nI am Working on a node js Project.",() =>{
//     console.log("Data Appended");
// })

// fs.readFile("Jarves/data.txt",'utf8',(err, data)=>{
//     console.log(data);
// })

// fs.rename("Jarves/data.txt","Jarves/MyBio.txt",(err)=>{
//     console.log("File name has changed");
// })

// fs.unlink("Jarves/MyBio.txt", (err) =>{
//     console.log("File has been removed");
// })

fs.rmdir("Jarves", (err) =>{
    console.log("Directory has been removed");
    console.log(err)
})
