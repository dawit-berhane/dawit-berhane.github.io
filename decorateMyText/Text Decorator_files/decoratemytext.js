function biggerDecoration(){
    var textElement = document.getElementById('text');
    textElement.style.fontSize = '24pt';
    
}

function onChange(){
    var checkBoxStatus = document.getElementById('checkbox');
    var textElement = document.getElementById('text');
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

