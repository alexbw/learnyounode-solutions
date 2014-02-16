var http = require('http')
var url = require('url')

var server = http.createServer(function (req,res) {
    p = url.parse(req.url, true)
    if (p.pathname == "/api/parsetime") {

        var date = new Date(p.query.iso)
        console.log(date)
        // date = ISODate(req)

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({
            hour:date.getHours(),
            minute:date.getMinutes(),
            second:date.getSeconds()
        }))
        res.end();

    } else if (p.pathname == "/api/unixtime") {
        var date = new Date(p.query.iso)

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({
            unixtime:date.getTime()
        }))
        console.log(date)
        res.end()

    } else {
        res.end()
    }
})

server.listen(Number(process.argv[2]))