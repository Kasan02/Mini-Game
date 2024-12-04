// 3 игра

const buttonGameTree = document.getElementById("treeGame");
buttonGameTree.addEventListener("click", () => {

    function reverseText() {
        let text = prompt("Введите текст, а мы его переверенем");
        
        text = text.split(" ");
        
        let res = [];
        
        for (let i = 0; i < text.length; i++){
        res.push (text[i].split("").reverse().join(""));
        }
        
        return alert(`Вот что получилось: ${res.join("")}`);
        }
        reverseText();
    });

