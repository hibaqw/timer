const process = require('process');
// Printing process.argv property value
var args = process.argv;
if (args.length > 2){
    for(let i = 2; i < args.length; i++){
        if(Number(args[i]) && args[i] >= 0){
            setTimeout(()=> process.stdout.write('\x07'), 1000 * args[i]);
        }
    }
}

