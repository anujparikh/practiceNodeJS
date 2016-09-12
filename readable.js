var http = require('http');

http.createServer(function (request, response) {
    response.writeHeader(200);
    /*request.on('readable', function () {
        var chunk = null;
        while (null != (chunk = request.read())) {
            response.write(chunk);
        }
    });
    request.on('end', function() {
       response.end();
    });*/ // Whole code can be replaced by node's helper method pipe
    request.pipe(response);
}).listen(8080)