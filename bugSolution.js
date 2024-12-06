function foo(a, b) {
  // Explicit type checking before performing the addition
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return "Error: Both parameters must be numbers"; // Handle invalid input 
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, "2")); // Output: "Error: Both parameters must be numbers"

//Alternative using parseInt to handle potential string inputs
function bar(a, b) {
  return parseInt(a) + parseInt(b);
}
console.log(bar(1, "2")); // Output: 3