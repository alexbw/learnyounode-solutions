var trumpet = require('trumpet')
var tr = trumpet()
var through = require('through')

var ts = through( function write (data) {
    this.emit(data.toString().toUpperCase())
})

process.stdin.pipe(tr)
var stream = tr.select("loud").createStream()

process.stdin
    .pipe(stream)
    .pipe(ts)
    .pipe(process.stdout)