/*
index.js file content
creates a server listening on port that returns a 200 and text "Bonjour World"
*/

let http = require('http');
http.createServer((request, response)=>{
    response.status(200).send('Bonjour World!');
}).listen(process.env.PORT);

