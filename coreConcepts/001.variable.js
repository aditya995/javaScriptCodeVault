/*
node 001.variable
*/

console.log('Finally 🍕🍕🍿');


/// Hoisting with var declaration 
car = 12;   //  Value can be asigned before declaration!
var car = 40;    
console.log(car);


/// Const Keyword 
const apple = 45;   // const variables must be Initialized
console.log(apple);
console.log('-----------');

/// Data Types 
console.log("Data Types: \n");
data;
console.log(typeof(data));  //undefined
data = 8;
console.log(typeof(data));  //number
var data = 'StringData';
console.log(typeof(data));  //string
data = null;
console.log(typeof(data));  //object
data = true;
console.log(typeof(data));  //boolean
console.log('-----------');

/*

Difference between null and undefined
When checking for null or undefined, beware of the differences between equality (==) and identity (===) operators, as the former performs type-conversion.

typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true

*/ 