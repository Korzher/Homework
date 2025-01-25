const myFilter = (array, callback) => {
  let result = [];
  for (let i = 0; i <= array.length - 1; i++) {
    callback(array[i]) ? result.push(array[i]) : null;
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];

const greaterThanThree = myFilter(numbers, function (num) {
  return num > 3;
});

console.log(greaterThanThree);

const evenNumbers = myFilter(numbers, function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);
