// <!-- Задание 1 -->
const btnEl = document.querySelector(".btn-hide");
const titleEl = document.querySelector(".title-hide");

console.log(titleEl);
console.log(btnEl);

btnEl.addEventListener("click", () => {

    titleEl.style.display = titleEl.style.display === "none" ? "block" : "none";
    console.log(titleEl.style.display);

    function btnClick() {

        if (titleEl.classList.contains("hidden")) {
            btnEl.textContent = "Cкрыть";
        } else {
            btnEl.textContent = "Показать";
        }
        titleEl.classList.toggle("hidden");
}
btnClick()
});

// <!-- Задание 2 -->
const btnElColor = document.querySelector(".btn-color");
const textElColor = document.querySelector(".text-color");

console.log(textElColor);
console.log(btnElColor);

btnElColor.addEventListener("click", () => {
    
    function btnColorClick() {
        textElColor.style.color = textElColor.style.color === "blue"? "black" : "blue";
}
btnColorClick()
});

// <!-- Задание 3 -->

const btnElChange = document.querySelector(".btn-change");
const titleElChange = document.querySelector(".title-change");

console.log(titleElChange);
console.log(btnElChange);

btnElChange.addEventListener("click", () => {

    function btnChangeClick() {

        titleElChange.textContent = titleElChange.textContent === "Пока, мир!"? "Привет, мир!" : "Пока, мир!";
}
btnChangeClick()
});

// <!-- Задание 4 -->

    const descriptionEl = document.querySelectorAll(".description");

    console.log(descriptionEl);
    descriptionEl.forEach(description => {

        description.textContent = "Измененное описание";
    });





