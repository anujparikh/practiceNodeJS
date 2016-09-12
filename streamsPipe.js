var fs = require('fs');

var file = fs.createReadStream('input.txt');
var newFile = fs.createWriteStream('input_copy.txt');

file.pipe(newFile);