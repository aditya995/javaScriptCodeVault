/*
node 010.func_objects
*/
//  Creating objects from function-objects
//  Acts more like a blueprint or object type
var functionObject = function () {
    this.val1 = 20; //Public property
    var val2 = 10;  // private property
    // similarly private and public functions
    this.getVals = function (str) {
        if (str === 'val1') {
            return this.val1;
        } else if (str === 'val2') {
            return val2;
        }
        return null;
    }
};

// Created objects from master object 'functionObject'
var obj1 = new functionObject();
var obj2 = new functionObject();

//  Directly accessing is prohibited, cause these are not singleton
console.log(functionObject.val1);   //undefined

console.log(obj1.val1); //20
obj2.val1 = 100;
console.log(obj2.val1); //100
console.log(obj2.getVals('val1')); //100

console.log(obj1.val2); //undefined
console.log(obj1 instanceof functionObject);    //true
console.log(obj2 instanceof functionObject);    //true
