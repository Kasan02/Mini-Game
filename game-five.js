// Пятая игра

const buttonGameFive = document.getElementById("fiveGame");
buttonGameFive.addEventListener("click", () => {
    function rockScissorsPaperGame() {

        const items = ['камень', 'ножницы', 'бумага'];
        const getItems = () => Math.floor(Math.random() * items.length);
        let playerEnter;
        const computerChoice = items[getItems()];
    
        switch (computerChoice) {
            case 'камень':
                break;
            case 'бумага':
                break;
            case 'ножницы':
                break;
        }
        const regexp = /^[а-яА-Я]*$/;
    
        do {
                playerEnter = prompt("Введите, пожалуйста, любое из слов: 'камень', 'ножницы' или 'бумага'");
            if (regexp.test(playerEnter)) {
                if (playerEnter.toLowerCase() === computerChoice.toLowerCase()) {
                        alert(`Компьютер выбрал ${computerChoice}`);
                        alert(`Вы выбрали: ${playerEnter}`);
                        alert('Ничья!');
                    } else if (playerEnter.toLowerCase() === 'бумага' && computerChoice.toLowerCase() === 'ножницы') {
                        alert(`Компьютер выбрал ${computerChoice}`);
                        alert(`Вы выбрали: ${playerEnter}`);
                        alert("Компьютер выйграл!");
    
                    } else if (playerEnter.toLowerCase() === 'камень' && computerChoice.toLowerCase() === 'бумага') {
                        alert(`Компьютер выбрал ${computerChoice}`);
                        alert(`Вы выбрали: ${playerEnter}`);
                        alert("Компьютер выйграл!");
                    } else if (playerEnter.toLowerCase() === 'ножницы' && computerChoice.toLowerCase() === 'камень') {
                        alert(`Компьютер выбрал ${computerChoice}`);
                        alert(`Вы выбрали: ${playerEnter}`);
                        alert("Компьютер выйграл!");
                    } else {
                        alert(`Компьютер выбрал ${computerChoice}`);
                        alert(`Вы выбрали: ${playerEnter}`);
                        alert("Вы выйграли!");
                    }
            } else {
                alert("Неправильный ввод!");
            }
    
        } while (!regexp.test(playerEnter));
    }
    rockScissorsPaperGame()
});