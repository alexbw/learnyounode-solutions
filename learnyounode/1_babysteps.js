var arg_sum = 0

for (var i = 2; i < process.argv.length; i++) {
    arg_sum += Number(process.argv[i])
};

console.log(arg_sum)