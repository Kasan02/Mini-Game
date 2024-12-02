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

const buttonGameTwo = document.getElementById("twoGame");
buttonGameTwo.addEventListener("click", () => {
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
    let userAnswear = Number(prompt(`Решите задачу? \n ${randomInt1} ${randomSigns} ${randomInt2}`));
    let result = randomSigns

    switch(randomSigns) {
      case "+": result = randomInt1 + randomInt2; 
      break;
      case "-": result = randomInt1 - randomInt2;  
      break;
      case "*": result = randomInt1 * randomInt2;  
      break;
      case "/": result = Math.floor(randomInt1 / randomInt2);  
      break;
    }

    if (userAnswear === result) {
      alert(`Вы решили задачу Верно`);
    } else {
      alert(`Вы решили задачу Неверно`)
    }
  }
)
  return(getResult());
