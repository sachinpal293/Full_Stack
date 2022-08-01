const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request',(req, res)=>{
//   fs.readFile("data.txt",(err, data)=>{
    // if(err)
    // {
        // return console.error(err);
    // }
    // res.end(data.toString());
//   });

  // now through stream
//   const rStream = fs.createReadStream("dataa.txt");

//   rStream.on('data',(chunk)=>{
    // res.write(chunk);
//   });

//   rStream.on('end',()=>{
    // res.end();
//   })

//   rStream.on('error',(err)=>{
    // res.end("file not found")
//   })

  // stream.pipe() => the method used to take a readable stream and connect it to a writeable stream

   const rStream = fs.createReadStream("data.txt");
   rStream.pipe(res);
});

server.listen(8000,"127.0.0.1",() =>{
    console.log("Sever start at port 8000")
});

   
