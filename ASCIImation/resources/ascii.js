/* code by Dawit Berhane Legese ID: 611125 -*/

let startBtn;
let stopBtn;

let display;

let slctanimation;
let slctsize;

let turbospeed;

let delay = 250;
let timer;
let playIndex = 0;


function load(){
    display = document.getElementById("textarea");

    startBtn = document.getElementById("startBtn");
    startBtn.onclick = playAnimation;
    
    stopBtn = document.getElementById("stopBtn");
    stopBtn.onclick = stop;
    
    slctanimation = document.getElementById("animation");
    slctanimation.onchange = initialLoad;
    stopBtn.disabled =  true;
    
    slctsize = document.getElementById("size");
    slctsize.onchange = changeSize;
    
    turbospeed = document.getElementById("turbo");
    turbospeed.onchange = changeSpeed;

}

window.onload = load;
function playAnimation(){
    playControls('start');
    timer = setInterval(play, delay);
}

function play(){
    let animation = ANIMATIONS[slctanimation.value];
    let animationArray = animation.split('=====\n');
    if(playIndex < animationArray.length){
        display.value = animationArray[playIndex];
        playIndex++;
    }
    else playIndex = 0;
}

function initialLoad(){
    display.value = ANIMATIONS[slctanimation.value];

}
function stop(){
    playControls('stop');
    clearInterval(timer);
    timer = null;
    initialLoad();
}


function changeSize(){
    let size = slctsize.value;
    display.style.fontSize = size+'pt';
}

function changeSpeed(){
    if(turbospeed.checked){
        delay = 50;
        clearInterval(timer);
        timer = setInterval(play, delay);

    }else{
        delay = 250;
        clearInterval(timer);
        timer = setInterval(play, delay);
    }
}

function playControls(btn){
    if(btn == 'start'){
        stopBtn.disabled = false;
        startBtn.disabled = true;
        slctanimation.disabled = true;
    }
    if(btn == 'stop'){
        stopBtn.disabled = true;
        startBtn.disabled = false;
        slctanimation.disabled = false;
    }
}