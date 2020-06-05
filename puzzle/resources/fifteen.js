$(function(){
    initialPosition();
});


function initialPosition(){
    $("#puzzlearea").children().each(function(){
        let num = this.innerHTML - 1;
        console.log(num);
        let x = ((num%4)*100);
        let y = (Math.floor(num/4)*100);
        console.log(x, y);
        $(this).addClass('puzzlepiece');
        $(this).css({
            "left": x+"px",
            "top": y+"px",
            "background-image": "url('./resources/background.jpg')",
            "background-position": -x+"px" +" "+(-y)+"px"
        });
        $(this).x = x;
        $(this).y = y;
        
    });
}

