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

/// scoping 
var a = null;
//var a initialized before-hand
console.log(typeof(a)); //object

a = 8;  //  This value-assign will change the variable's type dynamically!
console.log(typeof(a)); //number

var a;  
console.log(typeof(a)); // number
//Type is still number ! not undefined type!

