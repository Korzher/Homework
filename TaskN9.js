/* 
{
result[counter] = {...};
counter++;
} имитирует метод .push(), который не был использован намеренно, т.к. является методом массива, хотя его использование прямо и не было запрещено.
*/

function mySlice(arr, start, end) {
  let result = [];
  let counter = 0;

  start = start ? start : 0;
  end = end ? end : arr.length;
  start = start >= 0 ? start : arr.length + start;
  end = end >= 0 ? end : arr.length + end;

  for (let i = start; i < end; i++) {
    result[counter] = arr[i];
    counter++;
  }

  return result;
}

function myIndexOf(arr, item, from) {
  if (!from) {
    from = 0;
  }

  if (from >= 0) {
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
  } else {
    for (let i = arr.length + from; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
  }
  return -1;
}

function myIncludes(arr, item, from) {
  if (!from) {
    from = 0;
  }

  if (from >= 0) {
    for (let i = from; i < arr.length; i++) {
      if (arr[i] === item || isNaN(arr[i]) === isNaN(item)) {
        return true;
      }
    }
  } else {
    for (let i = arr.length + from; i < arr.length; i++) {
      if (arr[i] === item || isNaN(arr[i]) === isNaN(item)) {
        return true;
      }
    }
  }
  return false;
}

let arr = ["t", "e", "s", "t"];
mySlice(arr, 1, 3); // e,s (копирует с 1 до 3)
mySlice(arr, -2); // s,t (копирует с -2 до конца)

let arrIndexOf = [1, 0, false];
console.log(myIndexOf(arrIndexOf, 0)); // 1
console.log(myIndexOf(arrIndexOf, false)); // 2
console.log(myIndexOf(arrIndexOf, null)); // -1
console.log(myIncludes(arrIndexOf, 1)); // true

let fruits = ["Яблоко", "Апельсин", "Яблоко"];
console.log(myIndexOf(fruits, "Яблоко")); // 0 (первый 'Яблоко')

const arrNaN = [NaN];
console.log(myIndexOf(arrNaN, NaN)); // -1 (неверно, должен быть 0)
console.log(myIncludes(arrNaN, NaN)); // true (верно)

//Немного  ручных тестов
arrSlice = [0, 1, 2, 3, 4, 5];
console.log(mySlice(arrSlice, 1, 3));
console.log(arrSlice.slice(1, 3));
console.log(mySlice(arrSlice, -4, -2));
console.log(arrSlice.slice(-4, -2));
console.log(mySlice(arrSlice, -4, 3));
console.log(arrSlice.slice(-4, 3));
console.log(mySlice(arrSlice, 1, -1));
console.log(arrSlice.slice(1, -1));
console.log(mySlice(arrSlice, 1));
console.log(arrSlice.slice(1));
console.log(mySlice(arrSlice));
console.log(arrSlice.slice());
console.log(mySlice(arrSlice, 8, -4));
console.log(arrSlice.slice(8, -4));
