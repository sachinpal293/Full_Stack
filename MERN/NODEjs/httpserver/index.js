// The http.creatServer() method includes request and response parameter which is supplied by node.js

// The request object can be used to get information about the current HTTP request
//e.g.., url, request , header, and data


// The response object can be used to get information about the current HTTP response

// if  the response from the http server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {

   const data = fs.readFileSync("../userapi/userapi.json", "utf8");
   const  objectData = JSON.parse(data);

   if(req.url=="/"){
   res.end('Hello from the other side');
   }
   else if(req.url=="/about")
   {
    res.write("Hello this is about section")
    res.end();
   }
   else if(req.url=="/userapi")
   {
    //    fs.readFile("../userapi/userapi.json","utf-8", (err, data) =>{
            // console.log(data);
            
    //    });
       res.writeHead(200,{"Content-Type": "application/json"})
       res.end(objectData[1].name);
       
   }
   else
   {
    res.writeHead(404,{"Content-type":"text/html"})
    res.end("<h1>Page Does Not Exist</h1>")
   }
});
server.listen(9000,"127.0.0.1",()=>{
    console.log('listening from server port 8000')
});