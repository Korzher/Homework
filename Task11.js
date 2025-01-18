let input = "lorem ipsum dolor sit amet";

// Задание 1
function capitalize(string) {
  string = string[0].toUpperCase() + string.slice(1);
  return string;
}

console.log(capitalize(input));

//Задание 2
input =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function cut(string, maxLength) {
  if (string.length > maxLength) {
    return string.slice(0, maxLength - 1) + "…";
  }
  return string;
}

console.log(cut(input, 40));

//Задание 2.1
function cutAccurately(string, maxLength) {
  if (string.length > maxLength) {
    let parts = string.split(" ");
    let result = "";
    for (let i = 0; i <= parts.length - 1; i++) {
      if (result.length + parts[i].length <= maxLength - 1) {
        result += parts[i] + " ";
      } else {
        result = result.trim() + "…";
        break;
      }
    }
    return result;
  }
  return string;
}

console.log(cutAccurately(input, 40)); //По чудесному совпадению подстрока разрывается на пробеле как раз на 39 символе, тем не менее все работает на случайной другой длине

//Задание 3
function substringSearch(string1, string2) {
  return string1.includes(string2) || string2.includes(string1);
}

console.log(substringSearch("Lorem ipsum", "ipsum"));
