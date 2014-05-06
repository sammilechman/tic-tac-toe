var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  // notice how nowhere do I return anything here! You never return in
  // async code. Since the caller will not wait for the result, you
  // can't return anything to them.

  if (numsLeft > 0) {

    reader.question("Please enter a number: ", function(numString) {
      var num = parseInt(numString);
      console.log(sum += num);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {

    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});