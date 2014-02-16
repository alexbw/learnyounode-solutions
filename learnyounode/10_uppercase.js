var http = require("http")
var map = require("through2-map")

server = http.createServer(function(req, res) {
    if (req.method == "POST") {
        req.pipe(map(function(chunk) {
            return String(chunk).toUpperCase()
        })).pipe(res, {end:true})
    } else {
        res.end()
    }
});

server.listen(Number(process.argv[2]))