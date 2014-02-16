var http = require('http');
const bl = require('bl')
var url = process.argv[2];

stream = http.get(url, function(response) {
    response.setEncoding('utf8');
    response.pipe(bl( function (err, data) {
        console.log(data.toString().length);
        console.log(data.toString())
    }))
});