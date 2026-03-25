// History array
const history = [];

// Add to history
function addToHistory(num1, num2, operator, result) {
  history.push({ num1, num2, operator, result });
}

// Show history
function showHistory() {
  if (history.length === 0) {
    console.log("No calculations yet.");
    return;
  }

  history.forEach(item => {
    console.log(`${item.num1} ${item.operator} ${item.num2} = ${item.result}`);
  });
}

// Arithmetic functions
function add(a, b) {
  const result = a + b;
  addToHistory(a, b, "+", result);
  return result;
}

function subtract(a, b) {
  const result = a - b;
  addToHistory(a, b, "-", result);
  return result;
}

function multiply(a, b) {
  const result = a * b;
  addToHistory(a, b, "*", result);
  return result;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  const result = a / b;
  addToHistory(a, b, "/", result);
  return result;
}

// Test
console.log(add(5, 3));
console.log(multiply(4, 2));
showHistory();