const a = Math.floor(Math.random () * 100) +1;
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