/*
node 009.object
*/

/*  There are two types of objects in javascript:
    Non-function Object
    Function Object
*/

//Creation of objects and adding properties

// These are singleton (properties and methods are always public)
//  Can not create new objects from this objects(does not behave as class or blueprints)
let car = new Object();

car.name = 'vox';
var bike = {
    year : 2002,
    production: 'honda',
    sold: 55,
    getSoldCount: function () {
        return this.sold;
    }
};
//  Properties can be added afterwards
bike.model = 'a220';

//Removing the properties from object
delete (bike.production);
console.log(car);
console.dir(bike);

//directly access the properties of the singleton object
console.log(bike.year);
