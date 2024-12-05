// Hw5

// Задание 1

function min(a, b) {
    if (a > b) {
        return b;
    } else {
        return b;
    }
}
console.log(min(6, 4));

// Задание 2

function parity(number) {
    if (number % 2 === 0) {
      return 'Число чётное';
    } else {
      return 'Число нечётное';
    }
  }
  console.log(parity(1));
  console.log(parity(2));

// Задание 3-1

const sqr = (x) => {
    return x ** 2;
}
console.log(sqr(5)); 

// Задание 3-2

function funcReturn(num) {
    return num ** 2;
  }

  let res = funcReturn(5);
  console.log(res);

// Задание 4 
const userAge = Number(prompt('Сколько вам лет?'));
function funcQuestion(userAge) {
    if (isNaN(userAge)) {
        alert('Вы ввели не число');
    } else if (userAge >= 0 && userAge <= 12) {
        alert('Привет, друг!');
    } else if (userAge >= 13){
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
};

// Задание 5

let a = Number(prompt('Введите 1 число'));
let b = Number(prompt('Введите 2 число'));

function checkMult(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return ('Одно или оба значения не являются числом');
    } else {
        return (`Произведение чисел ${Number(a) * Number(b)}`);
    }
};
console.log(checkMult(a, b));

// Задание 6

let check = Number(prompt('Введите ваше число'));

function checkConstruction(check) {
    if (isNaN(check)) {
        return ('Переданный параметр не является числом');
    } else {
        return (check ** 3);
    }
};
console.log(checkConstruction(check));

// Задание 7

function getCircleArea() {
    return this.radius ** 2 * Math.PE;
}

function getCirclePerimeter() {
    return this.radius * 2 * Math.PE;
 }

 const circle1 = {
    radius: 10,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
 };

 const circle2 = {
    radius: 20,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
 };

 console.log(circle1.getArea());
 console.log(circle1.getPerimeter());
 console.log(circle2.getArea());
 console.log(circle2.getPerimeter());