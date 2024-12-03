const buttonGameTree = document.getElementById("treeGame");
buttonGameTree.addEventListener("click", () => {

function reverseString() {    
    let splitString = String(prompt("Введите ваш текст")).split();  
    let reverseArray = splitString.reverse(); 
    let joinArray = reverseArray.join(""); 

    return joinArray; 
} 
});
alert (joinArray);
