function biggerDecoration(){
    let textElement = document.getElementById('text');
    let currentSize = getComputedStyle(textElement).fontSize;;
    textElement.style.fontSize = (parseInt(currentSize) + 2) + 'pt';
    
}

function decor(){
    let checkBoxStatus = document.getElementById('checkbox');
    let textElement = document.getElementById('text');
    if(checkBoxStatus.checked){
    
    textElement.style.fontWeight = 'bold';
    textElement.style.color = 'green';
    textElement.style.textDecorationLine = 'underline';
   }
   if(!checkBoxStatus.checked){
    textElement.style.fontWeight = 'normal';
    textElement.style.color = 'black';
    textElement.style.textDecorationLine = 'none';
   }
}
// function that run after bigger btn clicked
// creates timer and call function that increase font size by two every .5sec
function automaticIncrease(){
    let timer = setInterval(biggerDecoration, 500);
}

var biggerBtn = document.getElementById("btn");
biggerBtn.onclick = automaticIncrease;

var checkBoxStatus = document.getElementById('checkbox');
checkBoxStatus.onclick = decor;
