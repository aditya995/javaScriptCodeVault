/*
node 005.const
*/

/// const in javascript

//  apple = 4;  // Not permitted, Its a const
const apple = 9;
//  apple = 40;  // Not permitted, Its a const
const person = {
    name: "Alex",
    age : 22
}
/*
//  Redefining Not permitted, Its a constant
const obj = {
    name : "Optimus"
}
*/
//  Value assign is permitted
person.name = 'Optimus Prime';

console.log(person.age);
console.log(person.name);

// ES5(older) way of defining constant type of variable
/***    Works on browser, not in nodejs **

Object.defineProperty(window, 'PI', { value: 3.14, writable: false });

PI = 4;
//  Prints 3.14!
console.log(PI);    //  Will not result compilation error

/******/