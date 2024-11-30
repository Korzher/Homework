function magicNumber(min, max) {
  const magicNumber = min + Math.random() * (max + 1 - min);
  console.log("Компьютер 1: Я загадываю число");
  return Math.floor(magicNumber);
}

console.log(magicNumber(1, 100));
