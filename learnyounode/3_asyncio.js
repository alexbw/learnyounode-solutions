var fs = require('fs')
var fileName = String(process.argv[2])

var numLines = 0
fs.readFile(fileName, function (err, data) {
  if (err) throw err;
  numLines += data.toString().split("\n").length
  console.log(numLines-1)
});

