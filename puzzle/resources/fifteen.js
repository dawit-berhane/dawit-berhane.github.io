(function(){
'use strict'


let openTile = {
    x: 300,
    y: 300
}
$(function(){
    initialPosition();
    $("#puzzlearea div").hover(highlight);
    $("#puzzlearea div").click(move);
    $("#shufflebutton").click(shuffle);
});

// initialize every piece of puzzle with positioin and 
// background image postion
function initialPosition(){
    $("#puzzlearea").children().each(function(){
        let num = this.innerHTML - 1;
       
        let x = ((num%4)*100);
        let y = (Math.floor(num/4)*100);
       
        $(this).addClass('puzzlepiece');
        $(this).css({
            "left": x+"px",
            "top": y+"px",
            "background-image": "url('./resources/background.jpg')",
            "background-position": -x+"px" +" "+(-y)+"px"
        });
        $(this).data('pos',{'x':x, 'y':y});
        //console.log($(this).data('pos').x);
        
    });
}
// highlights a puzzle piece if it is movable
function highlight(){
    let divX = $(this).data('pos').x;
    let divY = $(this).data('pos').y;

    let canMove = isMovable(divX, divY);
    
    if(canMove){
        $(this).addClass('movablepiece');
    }
    else{
        $(this).removeClass('movablepiece')
    }
}
// checks if a puzzle piece is movable or not
//@param x and y position of puzzle piece 
//@return returns if can be moved otherwise false
function isMovable(x, y){
    let openX = parseInt(openTile.x);
    let openY = parseInt(openTile.y);
    let distance = Math.abs(x-openX) + Math.abs(y-openY);
    if(distance == 100){
        return true;
    } 
    else{
        return false;
    } 
}
// moves a puzzle piece to adjescent open piece if available
function move(){
    let divX = $(this).data('pos').x;
    let divY = $(this).data('pos').y;
    let canMove = isMovable(divX, divY);
    if(canMove){
        $(this).css('left', function(idx, old){
            return (openTile.x)+'px';
        });
        $(this).css('top', function(idx, old){
            return (openTile.y)+'px';
        });
        $(this).data('pos',{'x': openTile.x, 'y':openTile.y});
        openTile.x = divX;
        openTile.y = divY;
    }
    
}
// shuffles the puzzle 
function shuffle(){
    for(let i=0; i<100; i++){
        $("#puzzlearea").children().each(function(){
            this.click();
        });
    }
}

})();