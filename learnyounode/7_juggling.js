var async = require("async")
var http = require("http")
var concat = require("concat-stream")

var urls = [process.argv[2], process.argv[3], process.argv[4]]

async.mapSeries(urls, function (url, callback) {
        http.get(url, function (response) {
            response.setEncoding('utf8')
            response.pipe(concat(function(data) {
                callback(null, data.toString());
            }))
            
        })
    }, 

    function (err, results) {
        for (var i = 0; i < results.length; i++) {
            console.log(results[i])
        };
    }
)