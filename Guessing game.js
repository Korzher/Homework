function magicNumber(min, max) {
  const magicNumber = min + Math.random() * (max + 1 - min);
  console.log("Компьютер 1: Я загадываю число");
  return Math.floor(magicNumber);
}

function guessing(min, max) {
  let guess = Math.floor((min + max) / 2);
  console.log(`Компьтер 2: Пробую число ${guess}`);
  return check(guess);
}

function check(guess) {
  return;
}

magicNumber(1, 100);
guessing(1, 100);
