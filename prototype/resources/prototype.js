(function(){
'use strict';

const createBicylePrototype = function(){
    return{
        speed: 0,
        applyBreak:function(param){
            this.speed -= param;
        },
        speedup: function(param){
            this.speed += param;
        }
    }
};

const createMountainBikePrototype = function(proto){
    let newObject = Object.create(proto);
    newObject.gear = 1;
    newObject.setGear = function(param){
        this.gear = param;
    }
    return{
        newObject
    }
}

let start = function(){

    let bicyclePrototype = createBicylePrototype();
    let mountainBikePrototype = createMountainBikePrototype(bicyclePrototype);

    

    console.log(bicyclePrototype.speed);
    console.log(mountainBikePrototype.speed);
    console.log(bicyclePrototype.hasOwnProperty('speed'));
    console.log(mountainBikePrototype.hasOwnProperty('speed'));
    mountainBikePrototype.speed = 4;
    console.log(mountainBikePrototype.hasOwnProperty('speed'));
    mountainBikePrototype.gear = 3;
    bicyclePrototype.speedup(2);
    console.log(bicyclePrototype.speed);
    console.log(mountainBikePrototype.speed);

    let bicycle = Object.create(bicyclePrototype);
    let mountainBike = Object.create(mountainBikePrototype);

    bicycle.speed = 6;
    bicycle.speedup(2);
    console.log(bicycle.speed);
    mountainBike.speed = 4;
    mountainBike.gear = 1;
    console.log(mountainBike.speed);
    console.log(mountainBike.gear);

}();

})();