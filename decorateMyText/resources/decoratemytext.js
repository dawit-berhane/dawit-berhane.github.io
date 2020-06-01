'use strict';
(function(){

    let textElement;
    let currentSize;
    let checkBoxStatus;
    let biggerBtn;
    
    
    window.onload = function(){
        textElement = document.getElementById('text');
        checkBoxStatus = document.getElementById('checkbox');
        biggerBtn = document.getElementById("btn");
    
        // attaching event to event listeners
        biggerBtn.onclick = automaticIncrease;
        checkBoxStatus.onclick = decor;
    };
    
    function biggerDecoration(){
        currentSize = getComputedStyle(textElement).fontSize;
            textElement.style.fontSize = (parseInt(currentSize) + 2) + 'pt';
    }
    
    function decor(){
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
        setInterval(biggerDecoration, 500);
    }


})();
