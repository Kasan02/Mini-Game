// Первая игра
const buttonGameOne = document.getElementById("oneGame");
buttonGameOne.addEventListener("click", () => {
  const a = Math.floor(Math.random() * 100) + 1;
let num = 0;

do {
  num = Number(prompt('Отгадай число от 1 до 100'));
  if (num === a) {
    alert('Угадал!');
  } else if (num > a) {
    alert('Твой ответ больше загаданного числа. Попробуй ещё!');
  } else if (num < a) {
    alert('Твой ответ меньше загаданного числа. Попробуй ещё!');
  }
} while (num !== a);
})

// Вторая игра

function simpleMath() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const randomInt1 = getRandomInt(0, 100);
  const randomInt2 = getRandomInt(0, 100);

  const signs = [`+`, `-`, `*`, `/`];
  const randomIndex = Math.floor(Math.random() * (signs.length));
  let randomSigns = signs[randomIndex];
  function getResult() {
    let userAnswear = prompt(`Решите задачу? \n ${task}`);
    let result;
    let task;
    switch (randomSigns) {
      case `+`:
        task = (`${randomInt1} + ${randomInt2}`);
        result = randomInt1 + randomInt2;
        break;
      case `-`:
        task = (`${randomInt1} - ${randomInt2}`);
        result = randomInt1 - randomInt2;
        break;
      case `*`:
        task = (`${randomInt1} * ${randomInt2}`);
        result = randomInt1 * randomInt2;
        break;
      case `/`:
        task = (`${randomInt1} / ${randomInt2}`);
        result = randomInt1 / randomInt2;
        break;
      default:
      alert('Таких значений нет');
    }
    if (userAnswear === result) {
      alert(`Вы решили задачу Верно`);
    } else {
      alert(`Вы решили задачу Неверно`)
    }
  }
  return(getResult());
}
alert();