var fs = require('fs')
var path = require('path')

// Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.
// You must write a module file to do most of the work. The module must export a single function that takes three arguments: the directory name, the filename extension string and a callback function. The filename extension argument must be the same as was passed to your program. i.e. don't turn it in to a RegExp or prefix with "." or do anything else but pass it to your module where you can do what you need to make your filter work.
// The callback function must be called using the idiomatic node(err, data) convention. This convention stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data. In this case the data will be your filtered list of files, as an Array. If you receive an error, e.g. from your call to  fs.readdir(), the callback must be called with the error, and only the error, as the first argument.
// You must not print directly to the console from your module file, only from your original program.
// In the case of an error bubbling up to your original program file, simply check for it and print an informative message to the console.

module.exports = function(dirpath, extension, callback) {

    fs.readdir(dirpath, function (err, list) {
        
        if (err) {
            return callback(err)
        } 
        else {
            var data = []
            
            for (var i = 0; i < list.length; i++) {
                if (path.extname(list[i]) == "." + extension) {
                    data.push(list[i])
                }
            }
            
            callback(null, data);
        }

    })    

}