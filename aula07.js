// Ternary Operator

const majority = true;

// (expression) ? (if the expression is true) : (if the expression is false)
console.log(majority ? "Maior de idade" : "Menor de idade"); // true

// chaining
const isMen = true;

console.log(isMen && majority ? "Alistamento" : isMen ? "Ainda não precisa de alistar" : "Mulher");
