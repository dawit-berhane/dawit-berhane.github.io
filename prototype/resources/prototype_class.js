(function(){
'use strict';

class Bicycle {
    constructor(){
        this.speed  = 0;
    }

    applyBreak(decrement){
        this.speed -= decrement;
    }

    speedUp(increament){
        this.speed += increament;
    }
}

class MountainBike extends Bicycle{
    
    constructor(){
        super();
        this.gear = 1;
    }

    setGear(value){
        this.gear = value;
    }
}

let bicycle = new Bicycle();
let mountainBike = new MountainBike();

console.log(bicycle.speed);
console.log(mountainBike.speed);
console.log(mountainBike.gear);
bicycle.speedUp(4);
mountainBike.speedUp(3);
console.log(bicycle.speed);
console.log(mountainBike.speed);
})();