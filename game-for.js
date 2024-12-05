// Четвертая игра

const buttonGameFor = document.getElementById("forGame");
buttonGameFor.addEventListener("click", () => {

function simpleQuiz() {
const quiz = [
    {
        question: `Какого цвета небо?`,
        options: [`1. Красный`, `2. Синий`, `3. Зеленый`],
        correctAnswer: 2,
    },
    {
        question: `Сколько дней в неделе?`,
        options: [`1. Шесть`, `2. Семь`, `3. Восемь`],
        correctAnswer: 2,
    },
    {
        question: `Сколько у человека пальцев на одной руке?`,
        options: [`1. Четыре`, `2. Пять`, `3. Шесть`],
        correctAnswer: 2,
    }
];

let num = 0;
for (let i = 0; i < quiz.length; i++) {
    let quizQuest = Number(prompt(`Выберите правильный ответ \n${quiz[i].question} \n${quiz[i].options}`));
    if (quizQuest == quiz[i][`correctAnswer`]) {
        num++;
        alert(`Вы ответили верно`);
    } else {
        alert(`Вы ответили неверно`);
    }
}

alert(`Вы ответили верно на ${num} вопросов`);

}
simpleQuiz();
});

