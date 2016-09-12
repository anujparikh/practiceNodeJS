var fs = require('fs');
var http = require('http');

/**
 * Normal Pipe usage with readable and writable stream
 */
var file = fs.createReadStream('input.txt');
var newFile = fs.createWriteStream('outputDir/input_copy.txt');
file.pipe(newFile);

/**
 * Pipe usage with request as readable stream and new file as writable stream
 * command to execute: curl --upload-file input.txt http://localhost:8080
 */
http.createServer(function (request, response) {
    response.writeHeader(200);
    var newFile = fs.createWriteStream('outputDir/output_response.txt');
    request.pipe(newFile);

    request.on('end', function () {
        response.end('\nuploaded..\n')
    })
}).listen(8080)

console.log('Listening on port 8080...');

