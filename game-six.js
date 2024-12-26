const buttonSixGame = document.getElementById("six-game");

buttonSixGame.addEventListener("click", function() {

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const changeColor = document.querySelector(".game-play");

    changeColor.style.backgroundColor = randomColor;
});
   