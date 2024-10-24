// let question = Number(prompt('Введите первое число'));

// function questionGame(question) {
//     if ()
// }
function starGame() {  
    const randomInt = getRandomInt(0,100);
    console.log(randomInt)
    let question = Number(prompt('Угадай число от 1 до 100'));
  
    if (isNaN(question)) {
      alert("Введено не число")
    } else if (question === randomInt) {
      alert('Угадал'); 
    } else if (randomInt <= 50) {
      alert ('Это число меньше 51');
    } else {
      alert ('это число больше 50');
    } 
  };