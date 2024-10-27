const question = Number(prompt('Угадайте число от 1 до 100'));
let randomNumber = 40;

function gameOne(question) {  
    if (isNaN(question)) {
      return ('Введено не число, повторите снова.');
    } else if (question === randomNumber) {
      return ('Ура, победа!!!Ждем тебя снова в нашей игре.'); 
    } else if (question <= 50 && question >= 41) {
      return ('Это число меньше 41 и уже близко, тихо, а то спугнём.');
    } else if (question >= 30 && question <= 39) {
      return ('Это число больше 39 и уже где-то рядом, чувствуете?');
    } else {
      return ('Вы не угадали, попробуйте еще.');
    }
  };
  alert(gameOne(question));
  
