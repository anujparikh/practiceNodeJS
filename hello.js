/**
 * First time we go through the code, Node is going to register Events
 * In this case, its a request event
 * Once it is done executing the code, Node goes into something called Event Loop (Checking for events continuously)
 */

var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) { // request event
    response.writeHead(200, {'Content-Type': 'text/plain'}); // Sends a response header to the request. The status code is a 3-digit HTTP status code, like 404.
    response.write('Dog is running');

    setTimeout(function () { // timeout event
        response.write('\n\nDog is done');
        response.end();
    }, 5000);

    fs.readFile('input.txt', function(error, contents) {
        response.write('\n\n' + contents);
    });
}).listen(8080);

console.log('Listening on port 8080...');
