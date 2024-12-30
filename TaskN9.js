/* 
{
result[counter] = {...};
counter++;
} имитирует метод .push(), который не был использован намеренно, т.к. является методом массива, хотя его использование прямо и не было запрещено.
*/

function mySlice(arr, start, end) {
  let result = [];
  let counter = 0;

  if (!start) {
    return arr;
  } else if (start >= 0) {
    if (!end) {
      end = arr.length;
    }

    if (end >= 0) {
      for (let i = start; i < end; i++) {
        result[counter] = arr[i];
        counter++;
      }
    } else if (end < 0) {
      for (let i = start; i < arr.length + end; i++) {
        result[counter] = arr[i];
        counter++;
      }
    }
  } else {
    if (!end) {
      for (let i = start; i < 0; i++) {
        if (arr[arr.length + i]) {
          result[counter] = arr[arr.length + i];
          counter++;
        }
      }
    } else {
      if (end < 0) {
        for (let i = start; i < end; i++) {
          result[counter] = arr[arr.length + i];
          counter++;
        }
      } else {
        for (let i = arr.length + start; i < end; i++) {
          result[counter] = arr[i];
          counter++;
        }
      }
    }
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
console.log(mySlice(arr, 1, 3)); // e,s (копирует с 1 до 3)
console.log(mySlice(arr, -2)); // s,t (копирует с -2 до конца)

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
