(function () {
    var fs = require('fs');
    var http = require('http');

    http.createServer(function (request, response) {
        response.writeHeader(200);
        var newFile = fs.createWriteStream('outputDir/abc.jpg');
        var fileBytes = request.headers['content-length'];
        var uploadedBytes = 0;

        request.on('readable', function () {
            var chunk = null;
            while (null != (chunk = request.read())) {
                uploadedBytes += chunk.length;
                var progress = ((uploadedBytes / fileBytes) * 100);
                response.write('Current progress: ' + parseInt(progress) + '%\n');
            }
        });
        request.pipe(newFile);

        request.on('end', function () {
            response.end('File Uploaded..\n');
        })
    }).listen(8080)

    console.log('Listening on port 8080...');
})();