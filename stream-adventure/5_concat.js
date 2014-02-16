var concat = require('concat-stream')
process.stdin
    .pipe(concat(function (data) {
        var out = data.toString().split('').reverse().join('')
        process.stdout.write(out)
    }))