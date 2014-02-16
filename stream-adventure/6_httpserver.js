var http = require('http')
var fs = require('fs')
var url = require('url')

var through = require('through')

// A little through method that upper cases stuff
write = function (buf) { this.queue(buf.toString().toUpperCase()) }
finish = function () {this.queue(null)}
var tr = through(write, finish)

// Fire up the server that uppercases POST requests
var server = http.createServer(function (req, res) {

    if (req.method == 'POST') {
        req.pipe(tr).pipe(res);
    }
    else {
        res.end("Only responds to POST requests\n");
    }
})


server.listen(Number(process.argv[2]))