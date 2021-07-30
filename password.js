const { rawListeners } = require('process');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to use as your password?", function(answer) {
    if(answer.length > 10){
      console.log(answer + ` is a valid password`)
    }else {
      console.log(answer + ` is not a long enough password`)
    }
    reader.close();
})