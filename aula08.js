// conditional structure

/* if (expression that return boolean value) { 
    (code that will be wxecuted if the expression is true) 
    } else {
        (code that will be executed if the expression is false )
    }
*/

// importing a native module from Node.js to read data from the terminal
const readline = require("node:readline");

// object that contains the interface settings
const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let age;

prompt.question("Enter your age: ", (answer) => {
  if (!isNaN(answer)) {
    age = parseInt(answer);
    if (age >= 18) {
      console.log("You are already legal of age!");
    } else if (age < 18 && age >= 12) {
      console.log("You are a teenager!");
    } else if (age < 12) {
      console.log("You are a child!");
    }
  } else {
    console.log("Enter a valid age!");
  }
  prompt.close();
});
