// Ternary Operator

const majority = true;

// (expression) ? (if the expression is true) : (if the expression is false)
console.log(majority ? "You already legal age" : "You are not a legal age"); // true

// chaining
const isMen = true;

console.log(isMen && majority ? "You can now register for military service" : isMen ? "You dont need for the military services yet" : "you are a woman");
