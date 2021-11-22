/*
node 011.function
*/

// function, default value, annonumous function, arrow function and it's scope of this keyword

// function ****
function add1(firstNum, secondNum) {
    return firstNum + secondNum;
}
// Javascript doesnot allow function overloading
var res = add1(2, 5); 
console.log(res);   //7

// Constant as Default values (default values in arguments is in es6)   **
function add2(firstNum = 0, secondNum = firstNum, thirdNum) {
    //return firstNum + secondNum + thirdNum;
    // [es5] way of doing it is ********
    return (firstNum || 0) + (secondNum || 0) + (thirdNum || 0);
}

//  In javascript we must handle the paremeter passing exceptions
var res = add2(2, 5, 4); 
console.log(res);   //11

// array as default value   **
function addArray(arr1 = [], arr2 = [], arr3 = [8,9]) {
    return [...arr1, ...arr2, ...arr3];
}
var array = addArray([1, 5], []);
console.log(array); //[ 1, 5, 8, 9 ]

//  Object as default value **
let x = {
    a: 4,
    b: 5
}
let addObjProps = function ({ a = 0, b = 0 } = {}) {
    return a + b;
}
console.log(addObjProps()); //0
console.log(addObjProps({ a: 4, b: 6 }));   //10
console.log(addObjProps(x));    //9
console.log('-----------');
//  Annonumous function
let funcAnn = function (arg) {
    console.log(arg);
};
funcAnn(5); //5

// Arrow function (Always a better choice)
let funcArrow = (arg) => {
    console.log(arg);
};
funcArrow(6); //6

// Scope of 'this' keyword in function vs Arrow-function

class Person {
    constructor(name) {
        this.name = name;
    }
    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name); // here 'this' means the scope of the whole class
        }, 0);
    }
    printNameFunction() {
        setTimeout(function () {
            console.log('Function: ' + this.name);  // here 'this' means the scope of this annonymous function
        }, 0);
    }
}
let person = new Person('Bob');
person.printNameArrow();    //Bob 
person.printNameFunction(); //undefined
console.log(this.name); //undefined