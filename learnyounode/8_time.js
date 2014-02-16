var net = require('net')
var strftime = require('strftime');
var port = Number(process.argv[2])

var server = net.createServer( function(socket) {
    day = strftime('%Y-%m-%d %H:%M', new Date())
    socket.end(day)
})

server.listen(port)
