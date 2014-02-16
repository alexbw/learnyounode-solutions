var split = require('split')
var through = require('through')

counter = 0
process.stdin
    .pipe(split())
    .pipe(through(function (line) {
        if (counter % 2) {
            line = line.toString().toUpperCase()
        } else {
            line = line.toString().toLowerCase()
        }
        this.queue(line+"\n");
        counter++
    }))
    .pipe(process.stdout)