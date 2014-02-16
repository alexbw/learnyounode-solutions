var filterFn = require('./5_module')


var path = process.argv[2]
var extension = process.argv[3]

filterFn(path, extension, function (err, data) {
    if (err) throw err;
    for (var i = 0; i < data.length; i++) {
        console.log(data[i])
    };
})