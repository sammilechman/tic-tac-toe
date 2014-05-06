var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askLessThan(el1, el2, callback) {
  reader.question("Is " + el1 + " less than " + el2 + "? ", function(input) {
    if (input.toLowerCase() === "y") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function sortArray(arr, i, madeAnySwaps, callback) {
  if (i < arr.length - 1) {
    askLessThan(arr[i], arr[i + 1],
      function(lessThan) {
        if (!lessThan) {
          temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          madeAnySwaps = true;
        }
        console.log(" ");
        console.log(arr);
        sortArray(arr, i + 1, madeAnySwaps, callback);
      }
    );
  } else if (madeAnySwaps === true) {
    sortArray(arr, 0, false, callback)
  } else {
    callback(arr);
  }
}

console.log("Answer the questions with 'y' or 'n'!\n");
sortArray([1,5,3,4,2], 0, false, function(arr){
  console.log("\n------");
  console.log("FINAL SORTED ARRAY!\n");
  console.log(arr);
  reader.close();
});