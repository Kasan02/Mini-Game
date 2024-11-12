// Hw2

// Задание 1
// let product = Number(alert('10'));
// let productPrice = Number(alert('20'));
// Задание 2
// const iphone = Number(alert('2007'));
// Задание 3
// const name = (alert('Брендан'));
// Задание 4
// let one = 10;
// let two = 2;
// let tree = 9;
// let addition = alert(one + two);
// let subtraction = alert(one - two);
// let multiplication = alert(one * two);
// let division = alert(one / two);
// Задание 5
// alert(two ** 5);
// Задание 6
// alert(tree % two);
// Задание 7
// let num = 1;
// alert(num += 5);
// alert(num -= 3);
// alert(num *= 7);
// alert(num /= 3);
// alert(num++);
// alert(num--);
// alert(num);
// Задание 8
// let age = Number(prompt("Сколько вам лет?"));
// let result = alert(age);
// Задание 9
// let user = {
//     name: 'Max',
//     age: 28, 
//     isAdmin: true,
// }
// Задание 10
// let names = prompt("Как вас зовут?");
// alert(`Привет, ${names}!`);


// Hw3

// Задание 1
// let password = prompt('Введите пароль');
// if (password === '0202') {
//     console.log('Пароль введён верно');
// } else {
//     console.log('Пароль введён неправильно');
// }
// Задание 2
// let c = 2;
// if (c > 0 && c < 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }
// Задание 3
// let d = 60;
// let e = 50;
// if (d || e > 100) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }
// Задание 4
// let f = '2';
// let g = '3';
// alert(Number(f) + Number(g));
// Задание 5
// let monthNumber = Number(prompt('Введите номер месяца'));

// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         console.log('Зима');
//     break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Весна');
//     break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Лето');
//     break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Осень');
//     break;
//     default:
//         console.log('Ошибка!')
// }

// Hw4

// Задание 1
// let w = 0;

// while (w < 2) {
//     console.log("Привет");
//     w++;
// }
// Задание 2
// let s = 1;

// while (s <= 5) {
//     console.log(s)
//     s++;
// }
// Задание 3
// let b = 7;

// while (b <= 22) {
//     console.log(b)
//     b++
// }
// Задание 4
// const obj = {
//     Коля: '200',
//     Вася: '300',
//     Петя: '400',
// }

// for (const key in obj) {
//     console.log(`${key} - ${obj[key]}$`);
// }

// Задание 5

// let k = 1000;
// let num = 0;

// while (k >= 50) {
//     k /= 2;
//     console.log(k)
//     num++;
// }
// console.log(`Количество циклов: ${num}`);

// Задание 6

// let dayFriday = 2;
// let allDay = 31;

// for (let i = dayFriday; i <= allDay; i += 7) {
//     console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);   
// }

// Hw5

// Задание 1
// function min(a, b) {
//     if (a > b) {
//         return b;
//     } else {
//         return b;
//     }
// }
// console.log(min(6, 4));

// Задание 2

// function parity(number) {
//     if (number % 2 === 0) {
//       return 'Число чётное';
//     } else {
//       return 'Число нечётное';
//     }
//   }
//   console.log(parity(1));
//   console.log(parity(2));

// Задание 3-1
// const sqr = (x) => {
//     return x ** 2;
// }
// console.log(sqr(5)); 

// Задание 3-2

// function funcReturn(num) {
//     return num ** 2;
//   }

//   let res = funcReturn(5);
//   console.log(res);

// Задание 4 
// const userAge = Number(prompt('Сколько вам лет?'));
// function funcQuestion(userAge) {
//     if (isNaN(userAge)) {
//         alert('Вы ввели не число');
//     } else if (userAge >= 0 && userAge <= 12) {
//         alert('Привет, друг!');
//     } else if (userAge >= 13){
//         alert('Добро пожаловать!');
//     } else {
//         alert('Вы ввели неправильное значение');
//     }
// };

// Задание 5

// let a = Number(prompt('Введите 1 число'));
// let b = Number(prompt('Введите 2 число'));

// function checkMult(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return ('Одно или оба значения не являются числом');
//     } else {
//         return (`Произведение чисел ${Number(a) * Number(b)}`);
//     }
// };
// console.log(checkMult(a, b));

// Задание 6

// let check = Number(prompt('Введите ваше число'));

// function checkConstruction(check) {
//     if (isNaN(check)) {
//         return ('Переданный параметр не является числом');
//     } else {
//         return (check ** 3);
//     }
// };
// console.log(checkConstruction(check));

// Задание 7

// function getCircleArea() {
//     return this.radius ** 2 * Math.PE;
// }

// function getCirclePerimeter() {
//     return this.radius * 2 * Math.PE;
//  }

//  const circle1 = {
//     radius: 10,
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
//  };

//  const circle2 = {
//     radius: 20,
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
//  };

//  console.log(circle1.getArea());
//  console.log(circle1.getPerimeter());
//  console.log(circle2.getArea());
//  console.log(circle2.getPerimeter());
 












































