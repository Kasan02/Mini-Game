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

    const descriptionEl = document.querySelectorAll(".description-all");

    console.log(descriptionEl);
    descriptionEl.forEach(description => {

        description.textContent = "Измененный текст";
    });

// <!-- Задание 5 -->

    const descriptionElChoice = document.querySelectorAll(".description-choice");

    console.log(descriptionElChoice);
    descriptionElChoice.forEach(description => {
        description.textContent = "Новый текст";
});

    // <!-- Задание 6 -->

    let buttonAddEl = document.querySelector(".btn-add");
    
    console.log(buttonAddEl);

    buttonAddEl = addEventListener("click", () => {
    const createElAdd = document.createElement("p");
    createElAdd.textContent = "Новый абзац";
    document.body.appendChild(createElAdd);
    });

    // <!-- Задание 7 -->

    let btnRemoveEl = document.querySelector(".btn-remove");
    const descriptionRemoveEl = document.querySelector(".description-remove");
    
    btnRemoveEl = addEventListener("click", function () {
        descriptionRemoveEl.remove();

        console.log(descriptionRemoveEl);

    });
    

    




