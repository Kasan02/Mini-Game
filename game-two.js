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