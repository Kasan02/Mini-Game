// <!-- Задание 1 -->
const btnEl = document.querySelector(".btn-hide");
const titleEl = document.querySelector(".title");

console.log(titleEl);
console.log(btnEl);

btnEl.addEventListener("click", () => {

    titleEl.style.display = titleEl.style.display === "none" ? "block" : "none";
    console.log(titleEl.style.display);

    btnEl.addEventListener("click", btnClick);

    function btnClick() {

        if (titleEl.classList.contains("hidden")) {
            btnEl.textContent = "Cкрыть";
        } else {
            btnEl.textContent = "Показать";
        }
        titleEl.classList.toggle("hidden");
}
});