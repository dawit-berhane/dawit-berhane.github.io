let openTile = {
    x: 300,
    y: 300
}
$(function(){
    initialPosition();
    $("#puzzlearea div").hover(isMovable);
    $("#puzzlearea div").click(move);
});


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

function isMovable(current){
    console.log(current);
    current = $(this);
    let isMovable = false;
    let divX = current.data('pos').x;
    let divY = current.data('pos').y;
    let openX = parseInt(openTile.x);
    let openY = parseInt(openTile.y);
    let distance = Math.abs((divX-openX) + (divY-openY));
    if(distance == 100){
        current.addClass('movablepiece');
        isMovable = true;
    }
    return isMovable;
}

function highlight(){
    $(this).addClass('movablepiece');
}

function move(){
    const current = $(this); 
    if(isMovable(current)){
    let divX = current.data('pos').x;
    let divY = current.data('pos').y;
    let openX = parseInt(openTile.x);
    let openY = parseInt(openTile.y);
    let distance = Math.abs((divX-openX) + (divY-openY));
    current.css('left', function(idx, old){
        return (openX)+'px';
    });
    current.css('top', function(idx, old){
        return (openY)+'px';
    });
    }
    
    
   
}