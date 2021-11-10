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