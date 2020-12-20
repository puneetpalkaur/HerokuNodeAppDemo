/*
index.js file content
creates a server listening on port that returns a 200 and text "Bonjour World"
*/

let http = require('http');
http.createServer((request, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');

}).listen(process.env.PORT);

