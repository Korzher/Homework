function calculate(a, b, operationFunction) {
  return operationFunction(a, b);
}

const calculateAdd = function (a, b) {
  return a + b;
};

const calculateSubtract = function (a, b) {
  return a - b;
};

const calculateMultiply = function (a, b) {
  return a * b;
};

const calculateDivide = function (a, b) {
  return a / b;
};

const operations = {
  add: calculateAdd,
  subtract: calculateSubtract,
  multiply: calculateMultiply,
  divide: calculateDivide,
};

let selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation])); // 18
