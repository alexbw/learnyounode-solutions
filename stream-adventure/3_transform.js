var through = require('through')
write = function (buf) { this.queue(buf.toString().toUpperCase()) }
var tr = through(write)
process.stdin.pipe(tr).pipe(process.stdout)