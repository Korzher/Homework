function sumOfSales(sales) {
  let sum = 0;
  sales.forEach((sale) => {
    sum += sale;
  });
  return sum;
}

let topSales = [10000, 20000, 30000];
console.log(sumOfSales(topSales));
