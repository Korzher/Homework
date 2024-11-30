let secretNumber;
let guess;
var min;
var max;

function magicNumber(min, max) {
  secretNumber = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(`Компьютер 1 (по секрету): Я загадываю число ${secretNumber}`);
  return guessing(min, max);
}

function guessing(min, max) {
  guess = Math.floor((min + max) / 2);
  console.log(`Компьтер 2: Пробую число ${guess}`);
  return check(guess, min, max);
}

function check(guess, min, max) {
  if (guess > secretNumber) {
    max = guess;
    console.log("Компьютер 1: Меньше");
    return guessing(min, max);
  } else if (secretNumber > guess) {
    min = guess;
    console.log("Компьютер 1: Больше");
    return guessing(min, max);
  } else {
    return console.log("Компьютер 1: Угадал!");
  }
}

magicNumber(1, 100);
